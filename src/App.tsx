import { useEffect, useRef, useState } from 'react'
import './App.css'
import { SceneCanvas } from './components/scene/SceneCanvas'
import { SelectionOverlay } from './components/overlay/SelectionOverlay'
import { diceKinds } from './features/calendar/model/types'
import type { DiceKind, RotationAction } from './features/calendar/model/types'
import {
  cloneOrientation,
  createInitialDiceState,
  rotateDiceOrientation,
} from './features/calendar/model/state'

function App() {
  const [diceStates, setDiceStates] = useState(() => createInitialDiceState())
  const [diceOrder, setDiceOrder] = useState<DiceKind[]>(() => [...diceKinds])
  const [selectedDiceId, setSelectedDiceId] = useState<DiceKind | null>(null)
  const putAudioRef = useRef<HTMLAudioElement | null>(null)
  const spinAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const putAudio = new Audio('/put.mp3')
    putAudio.preload = 'auto'
    putAudio.volume = 0.03
    putAudioRef.current = putAudio

    const spinAudio = new Audio('/spin.mp3')
    spinAudio.preload = 'auto'
    spinAudio.volume = 0.1
    spinAudioRef.current = spinAudio

    return () => {
      putAudio.pause()
      spinAudio.pause()
      putAudioRef.current = null
      spinAudioRef.current = null
    }
  }, [])

  const playPutSound = () => {
    const audio = putAudioRef.current

    if (!audio) {
      return
    }

    audio.currentTime = 0
    void audio.play().catch(() => { })
  }

  const playSpinSound = () => {
    const audio = spinAudioRef.current

    if (!audio) {
      return
    }

    audio.currentTime = 0
    void audio.play().catch(() => { })
  }

  const handleSelectDice = (nextSelectedDiceId: DiceKind | null) => {
    setDiceStates((current) => {
      const nextState = { ...current }

      if (selectedDiceId) {
        const selectedState = current[selectedDiceId]

        nextState[selectedDiceId] = {
          ...selectedState,
          previewOrientation: cloneOrientation(selectedState.confirmedOrientation),
          status: 'idle',
        }
      }

      if (nextSelectedDiceId) {
        const nextSelectedState = nextState[nextSelectedDiceId]

        nextState[nextSelectedDiceId] = {
          ...nextSelectedState,
          previewOrientation: cloneOrientation(nextSelectedState.confirmedOrientation),
          status: 'selected',
        }
      }

      return nextState
    })

    setSelectedDiceId(nextSelectedDiceId)
  }

  const handleRotate = (action: RotationAction) => {
    if (!selectedDiceId) {
      return
    }

    playSpinSound()

    setDiceStates((current) => {
      const selectedState = current[selectedDiceId]
      const nextPreviewOrientation = rotateDiceOrientation(
        selectedState.previewOrientation,
        action,
      )

      return {
        ...current,
        [selectedDiceId]: {
          ...selectedState,
          previewOrientation: nextPreviewOrientation,
          status: 'selected',
        },
      }
    })
  }

  const handleConfirm = () => {
    if (!selectedDiceId) {
      return
    }

    setDiceStates((current) => {
      const selectedState = current[selectedDiceId]

      return {
        ...current,
        [selectedDiceId]: {
          ...selectedState,
          confirmedOrientation: cloneOrientation(selectedState.previewOrientation),
          status: 'confirmed',
        },
      }
    })

    setSelectedDiceId(null)
  }

  const selectedDiceIndex = selectedDiceId ? diceOrder.indexOf(selectedDiceId) : -1
  const canMoveLeft = selectedDiceIndex > 0
  const canMoveRight =
    selectedDiceIndex !== -1 && selectedDiceIndex < diceOrder.length - 1

  const moveSelectedDice = (direction: 'left' | 'right') => {
    if (!selectedDiceId) {
      return
    }

    setDiceOrder((current) => {
      const currentIndex = current.indexOf(selectedDiceId)

      if (currentIndex === -1) {
        return current
      }

      const nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1

      if (nextIndex < 0 || nextIndex >= current.length) {
        return current
      }

      const nextOrder = [...current]
        ;[nextOrder[currentIndex], nextOrder[nextIndex]] = [
          nextOrder[nextIndex],
          nextOrder[currentIndex],
        ]
      playPutSound()

      return nextOrder
    })
  }

  const handleMoveLeft = () => {
    if (!canMoveLeft) {
      return
    }

    moveSelectedDice('left')
  }

  const handleMoveRight = () => {
    if (!canMoveRight) {
      return
    }

    moveSelectedDice('right')
  }

  return (
    <main className="app-shell">
      <section className="scene-panel" aria-label="Dice calendar 3D scene">
        <SceneCanvas
          diceStates={diceStates}
          diceOrder={diceOrder}
          selectedDiceId={selectedDiceId}
          onSelectDice={handleSelectDice}
          onPutSound={playPutSound}
        />
        <SelectionOverlay
          canMoveLeft={canMoveLeft}
          canMoveRight={canMoveRight}
          selectedDiceId={selectedDiceId}
          onConfirm={handleConfirm}
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
          onRotate={handleRotate}
        />
      </section>
    </main>
  )
}

export default App

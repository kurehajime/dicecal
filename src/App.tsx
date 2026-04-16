import { useState } from 'react'
import './App.css'
import { SceneCanvas } from './components/scene/SceneCanvas'
import {
  SelectionOverlay,
  type RotationAction,
} from './components/overlay/SelectionOverlay'
import type { DiceKind } from './features/calendar/model/types'

function App() {
  const [selectedDiceId, setSelectedDiceId] = useState<DiceKind | null>(null)
  const handleRotate: (action: RotationAction) => void = () => {}

  return (
    <main className="app-shell">
      <section className="scene-panel" aria-label="Dice calendar 3D scene">
        <SceneCanvas
          selectedDiceId={selectedDiceId}
          onSelectDice={setSelectedDiceId}
        />
        <SelectionOverlay
          selectedDiceId={selectedDiceId}
          onConfirm={() => setSelectedDiceId(null)}
          onRotate={handleRotate}
        />
      </section>
    </main>
  )
}

export default App

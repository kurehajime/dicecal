import { useState } from 'react'
import './App.css'
import { SceneCanvas } from './components/scene/SceneCanvas'
import type { DiceKind } from './features/calendar/model/types'

function App() {
  const [selectedDiceId, setSelectedDiceId] = useState<DiceKind | null>(null)

  return (
    <main className="app-shell">
      <section className="scene-panel" aria-label="Dice calendar 3D scene">
        <SceneCanvas
          selectedDiceId={selectedDiceId}
          onSelectDice={setSelectedDiceId}
        />
      </section>
    </main>
  )
}

export default App

import type { DiceKind } from '../../features/calendar/model/types'
import { Physics } from '@react-three/rapier'
import { ContactShadows } from '@react-three/drei'
import { PlaceholderDie } from '../dice/PlaceholderDie'
import { CalendarBase } from '../stage/CalendarBase'
import { diceDefinitions } from '../../features/calendar/model/definitions'

type DiceSceneProps = {
  selectedDiceId: DiceKind | null
  onSelectDice: (diceId: DiceKind) => void
}

export function DiceScene({
  selectedDiceId,
  onSelectDice,
}: DiceSceneProps) {
  return (
    <>
      <group position={[0, -0.92, 0]}>
        <Physics gravity={[0, -9.81, 0]}>
          <CalendarBase />
          {diceDefinitions.map((definition) => (
            <PlaceholderDie
              key={definition.id}
              definition={definition}
              isSelected={selectedDiceId === definition.id}
              onSelect={onSelectDice}
            />
          ))}
        </Physics>
      </group>

      <ContactShadows
        blur={2.2}
        color="#3d3025"
        opacity={0.25}
        position={[0, -0.92, 0]}
        scale={12}
      />
    </>
  )
}

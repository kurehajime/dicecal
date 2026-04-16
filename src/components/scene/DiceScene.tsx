import { Physics } from '@react-three/rapier'
import { ContactShadows } from '@react-three/drei'
import { PlaceholderDie } from '../dice/PlaceholderDie'
import { CalendarBase } from '../stage/CalendarBase'
import { diceDefinitions } from '../../features/calendar/model/definitions'

export function DiceScene() {
  return (
    <>
      <group position={[0, -1.35, 0]}>
        <Physics gravity={[0, -9.81, 0]}>
          <CalendarBase />
          {diceDefinitions.map((definition) => (
            <PlaceholderDie
              key={definition.id}
              definition={definition}
            />
          ))}
        </Physics>
      </group>

      <ContactShadows
        blur={2.4}
        color="#5c4633"
        opacity={0.45}
        position={[0, -1.34, 0]}
        scale={14}
      />
    </>
  )
}

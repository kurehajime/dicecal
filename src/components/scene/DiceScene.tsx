import { Physics } from '@react-three/rapier'
import { ContactShadows } from '@react-three/drei'
import { PlaceholderDie } from '../dice/PlaceholderDie'
import { CalendarBase } from '../stage/CalendarBase'
import { diceDefinitions } from '../../features/calendar/model/definitions'

export function DiceScene() {
  return (
    <>
      <group position={[0, -0.66, 0]}>
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
        blur={2.2}
        color="#3d3025"
        opacity={0.25}
        position={[0, -0.66, 0]}
        scale={12}
      />
    </>
  )
}

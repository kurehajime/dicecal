import { diceDefinitions } from '../../features/calendar/model/definitions'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export function CalendarBase() {
  return (
    <>
      <RigidBody colliders={false} type="fixed">
        <mesh
          position={[0, -1.75, 0]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#d8c8b5" roughness={0.95} />
        </mesh>
        <CuboidCollider args={[15, 0.1, 15]} position={[0, -1.85, 0]} />
      </RigidBody>

      <RigidBody colliders={false} position={[0, 0, 0]} type="fixed">
        <mesh castShadow position={[0, -0.62, 0]} receiveShadow>
          <boxGeometry args={[7.8, 1.24, 2.25]} />
          <meshStandardMaterial color="#232325" roughness={0.62} />
        </mesh>
        <mesh castShadow position={[0, 0.02, 0]} receiveShadow>
          <boxGeometry args={[7.15, 0.08, 1.18]} />
          <meshStandardMaterial color="#2d2d31" roughness={0.5} />
        </mesh>
        <mesh position={[0, -0.36, 1.126]} receiveShadow>
          <planeGeometry args={[7.76, 0.5]} />
          <meshStandardMaterial color="#2a2a2d" roughness={0.7} />
        </mesh>

        <mesh
          position={[0, -0.02, 0]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[7.2, 1.16]} />
          <meshStandardMaterial color="#2f3135" roughness={0.55} />
        </mesh>

        {diceDefinitions.map((definition) => (
          <mesh
            key={definition.id}
            position={[
              definition.placement.basePosition[0],
              -0.02,
              definition.placement.basePosition[2],
            ]}
            receiveShadow
          >
            <boxGeometry args={[1.06, 0.05, 1.06]} />
            <meshStandardMaterial color="#1f2022" roughness={0.85} />
          </mesh>
        ))}

        <CuboidCollider args={[3.9, 0.62, 1.125]} position={[0, -0.62, 0]} />
      </RigidBody>
    </>
  )
}

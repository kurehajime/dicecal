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
        <mesh position={[0, -0.36, 1.126]} receiveShadow>
          <planeGeometry args={[7.76, 0.5]} />
          <meshStandardMaterial color="#2a2a2d" roughness={0.7} />
        </mesh>

        <mesh castShadow position={[0, 0.16, -0.56]} receiveShadow>
          <boxGeometry args={[7.1, 0.46, 0.18]} />
          <meshStandardMaterial color="#2b2c30" roughness={0.58} />
        </mesh>
        <mesh castShadow position={[0, -0.02, 0.56]} receiveShadow>
          <boxGeometry args={[7.1, 0.12, 0.16]} />
          <meshStandardMaterial color="#2d2e33" roughness={0.62} />
        </mesh>
        <mesh castShadow position={[-3.47, 0.08, -0.02]} receiveShadow>
          <boxGeometry args={[0.14, 0.3, 1.18]} />
          <meshStandardMaterial color="#2a2b2f" roughness={0.6} />
        </mesh>
        <mesh castShadow position={[3.47, 0.08, -0.02]} receiveShadow>
          <boxGeometry args={[0.14, 0.3, 1.18]} />
          <meshStandardMaterial color="#2a2b2f" roughness={0.6} />
        </mesh>

        <mesh
          castShadow
          position={[0, -0.08, -0.02]}
          receiveShadow
          rotation={[-0.32, 0, 0]}
        >
          <boxGeometry args={[7.0, 0.08, 1.04]} />
          <meshStandardMaterial color="#16171a" roughness={0.92} />
        </mesh>

        {diceDefinitions.map((definition) => (
          <mesh
            key={definition.id}
            position={[definition.placement.basePosition[0], 0.01, 0.49]}
            receiveShadow
          >
            <boxGeometry args={[0.94, 0.06, 0.08]} />
            <meshStandardMaterial color="#1a1b1d" roughness={0.96} />
          </mesh>
        ))}

        <CuboidCollider args={[3.9, 0.62, 1.125]} position={[0, -0.62, 0]} />
      </RigidBody>
    </>
  )
}

import type { DiceDefinition } from '../../features/calendar/model/types'
import { RoundedBox } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
 
type PlaceholderDieProps = {
  definition: DiceDefinition
}

export function PlaceholderDie({
  definition,
}: PlaceholderDieProps) {
  return (
    <RigidBody
      position={definition.placement.basePosition}
      rotation={definition.placement.baseRotation}
      type="fixed"
    >
      <RoundedBox
        args={[1, 1, 1]}
        castShadow
        receiveShadow
        radius={0.08}
        smoothness={6}
      >
        <meshStandardMaterial
          color={definition.color}
          metalness={0.08}
          roughness={0.35}
        />
      </RoundedBox>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.501, 0]}>
        <planeGeometry args={[0.78, 0.78]} />
        <meshStandardMaterial
          color="#f6eee2"
          roughness={0.8}
        />
      </mesh>
    </RigidBody>
  )
}

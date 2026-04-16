import { diceDefinitions } from './definitions'
import type {
  DiceDefinition,
  DiceKind,
  DiceOrientation,
  DiceRuntimeState,
} from './types'

function cloneOrientation(orientation: DiceOrientation): DiceOrientation {
  return {
    quarterTurns: { ...orientation.quarterTurns },
    quaternion: [...orientation.quaternion] as DiceOrientation['quaternion'],
  }
}

export function createInitialDiceState(): Record<DiceKind, DiceRuntimeState> {
  return Object.fromEntries(
    diceDefinitions.map((definition) => [
      definition.id,
      {
        id: definition.id,
        kind: definition.kind,
        status: 'idle',
        confirmedOrientation: cloneOrientation(definition.initialOrientation),
        previewOrientation: cloneOrientation(definition.initialOrientation),
      },
    ]),
  ) as Record<DiceKind, DiceRuntimeState>
}

export function getDiceDefinition(kind: DiceKind): DiceDefinition {
  const definition = diceDefinitions.find((item) => item.kind === kind)

  if (!definition) {
    throw new Error(`Unknown dice kind: ${kind}`)
  }

  return definition
}

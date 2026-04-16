import type {
  CubeFace,
  DiceDefinition,
  DiceFaceLabels,
  DiceKind,
  DiceOrientation,
} from './types'

const faceAssignmentOrder: CubeFace[] = [
  'front',
  'right',
  'back',
  'left',
  'top',
  'bottom',
]

function createFaceLabels(labels: string[]): DiceFaceLabels {
  return faceAssignmentOrder.reduce<DiceFaceLabels>(
    (faces, face, index) => ({
      ...faces,
      [face]: labels[index],
    }),
    {
      front: '',
      right: '',
      back: '',
      left: '',
      top: '',
      bottom: '',
    },
  )
}

const identityOrientation: DiceOrientation = {
  quarterTurns: { x: 0, y: 0, z: 0 },
  quaternion: [0, 0, 0, 1],
}

export const diceFaceLabelsByKind: Record<DiceKind, DiceFaceLabels> = {
  month: createFaceLabels([
    'JUN/DEC',
    'FEB/AUG',
    'MAR/SEP',
    'APR/OCT',
    'MAY/NOV',
    'JAN/JUL',
  ]),
  weekday: createFaceLabels(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT/SUN']),
  dateTens: createFaceLabels(['0', '1', '2', '6', '7', '8']),
  dateOnes: createFaceLabels(['0', '1', '2', '3', '4', '5']),
}

export const diceDefinitions: DiceDefinition[] = [
  {
    id: 'month',
    kind: 'month',
    color: '#ef6b7a',
    faces: diceFaceLabelsByKind.month,
    placement: {
      basePosition: [-2.1, 0.44, 0],
      baseRotation: [0, 0, 0],
    },
    initialOrientation: identityOrientation,
  },
  {
    id: 'weekday',
    kind: 'weekday',
    color: '#f1d439',
    faces: diceFaceLabelsByKind.weekday,
    placement: {
      basePosition: [-0.7, 0.44, 0],
      baseRotation: [0, 0, 0],
    },
    initialOrientation: identityOrientation,
  },
  {
    id: 'dateTens',
    kind: 'dateTens',
    color: '#39a4df',
    faces: diceFaceLabelsByKind.dateTens,
    placement: {
      basePosition: [0.7, 0.44, 0],
      baseRotation: [0, 0, 0],
    },
    initialOrientation: identityOrientation,
  },
  {
    id: 'dateOnes',
    kind: 'dateOnes',
    color: '#45a9e5',
    faces: diceFaceLabelsByKind.dateOnes,
    placement: {
      basePosition: [2.1, 0.44, 0],
      baseRotation: [0, 0, 0],
    },
    initialOrientation: identityOrientation,
  },
]

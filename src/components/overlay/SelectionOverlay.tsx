export type RotationAction =
  | 'tiltUp'
  | 'tiltDown'
  | 'tiltLeft'
  | 'tiltRight'
  | 'spinCcw'
  | 'spinCw'

type SelectionOverlayProps = {
  selectedDiceId: string | null
  onConfirm: () => void
  onRotate: (action: RotationAction) => void
}

const overlayButtons: {
  action: RotationAction
  className: string
  label: string
}[] = [
  { action: 'tiltUp', className: 'overlay-up', label: '↑' },
  { action: 'tiltDown', className: 'overlay-down', label: '↓' },
  { action: 'tiltLeft', className: 'overlay-left', label: '←' },
  { action: 'tiltRight', className: 'overlay-right', label: '→' },
  { action: 'spinCcw', className: 'overlay-spin-left', label: '↺' },
  { action: 'spinCw', className: 'overlay-spin-right', label: '↻' },
]

export function SelectionOverlay({
  selectedDiceId,
  onConfirm,
  onRotate,
}: SelectionOverlayProps) {
  if (!selectedDiceId) {
    return null
  }

  return (
    <div className="selection-overlay" aria-live="polite">
      <div className="selection-overlay__cluster">
        {overlayButtons.map((button) => (
          <button
            key={button.action}
            type="button"
            className={`selection-overlay__button ${button.className}`}
            onClick={() => onRotate(button.action)}
            aria-label={button.action}
          >
            {button.label}
          </button>
        ))}
        <button
          type="button"
          className="selection-overlay__button selection-overlay__confirm"
          onClick={onConfirm}
          aria-label="confirm selection"
        >
          ✓
        </button>
      </div>
    </div>
  )
}

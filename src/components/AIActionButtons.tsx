import { Button, InlineLoading } from '@carbon/react'
import type { AIAction } from '../types/note'

interface AIActionButtonsProps {
  onAction: (action: AIAction) => void
  loading: boolean
}

export function AIActionButtons({ onAction, loading }: AIActionButtonsProps) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
      {loading ? (
        <InlineLoading description="Procesando con IA..." />
      ) : (
        <>
          <Button kind="tertiary" size="sm" onClick={() => onAction('improve')}>
            ✨ Mejorar
          </Button>
          <Button kind="tertiary" size="sm" onClick={() => onAction('summarize')}>
            📝 Resumir
          </Button>
          <Button kind="tertiary" size="sm" onClick={() => onAction('expand')}>
            🔎 Expandir
          </Button>
        </>
      )}
    </div>
  )
}
import { useState } from 'react'
import { TextInput, TextArea, Button, InlineNotification } from '@carbon/react'
import type { Note, AIAction } from '../types/note'
import { AIActionButtons } from './AIActionButtons'
import { notesApi } from '../api/client'

interface NoteFormProps {
  initialNote?: Note
  onSubmit: (title: string, content: string) => Promise<void>
}

export function NoteForm({ initialNote, onSubmit }: NoteFormProps) {
  const [title, setTitle] = useState(initialNote?.title || '')
  const [content, setContent] = useState(initialNote?.content || '')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    let valid = true
    if (!title.trim()) {
      setTitleError('El título es obligatorio')
      valid = false
    } else {
      setTitleError('')
    }
    if (!content.trim()) {
      setContentError('El contenido es obligatorio')
      valid = false
    } else {
      setContentError('')
    }
    return valid
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setSubmitting(true)
    try {
      await onSubmit(title, content)
    } finally {
      setSubmitting(false)
    }
  }

  const handleAIAction = async (action: AIAction) => {
    if (!initialNote) return
    setAiLoading(true)
    setAiError('')
    try {
      const result = await notesApi.applyAI(initialNote.id, action)
      setContent(result)
    } catch {
      setAiError('Error al procesar la IA. Inténtalo de nuevo.')
    } finally {
      setAiLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextInput
        id="title"
        labelText="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        invalid={!!titleError}
        invalidText={titleError}
        placeholder="Título de la nota"
      />
      <TextArea
        id="content"
        labelText="Contenido"
        value={content}
        onChange={e => setContent(e.target.value)}
        invalid={!!contentError}
        invalidText={contentError}
        placeholder="Escribe aquí tu nota..."
        rows={8}
      />
      {initialNote && (
        <>
          <AIActionButtons onAction={handleAIAction} loading={aiLoading} />
          {aiError && (
            <InlineNotification
              kind="error"
              title="Error IA"
              subtitle={aiError}
              hideCloseButton
            />
          )}
        </>
      )}
      <Button onClick={handleSubmit} disabled={submitting}>
        {submitting ? 'Guardando...' : initialNote ? 'Guardar cambios' : 'Crear nota'}
      </Button>
    </div>
  )
}
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Grid, Column, InlineLoading, InlineNotification } from '@carbon/react'
import { useNotes } from '../context/NotesContext'
import { NoteForm } from '../components/NoteForm'
import type { Note } from '../types/note'
import { notesApi } from '../api/client'

export function NoteFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { createNote, updateNote } = useNotes()
  const [note, setNote] = useState<Note | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const isEditing = !!id

  useEffect(() => {
    if (!id) return
    setLoading(true)
    notesApi.getById(id)
      .then(setNote)
      .catch(() => setError('No se encontró la nota'))
      .finally(() => setLoading(false))
  }, [id])

  const handleSubmit = async (title: string, content: string) => {
    if (isEditing && id) {
      await updateNote(id, title, content)
    } else {
      await createNote(title, content)
    }
    navigate('/')
  }

  if (loading) return <InlineLoading description="Cargando nota..." />
  if (error) return <InlineNotification kind="error" title="Error" subtitle={error} hideCloseButton />

  return (
    <Grid>
      <Column lg={8} md={6} sm={4}>
        <h2 style={{ margin: '2rem 0 1.5rem' }}>
          {isEditing ? 'Editar nota' : 'Nueva nota'}
        </h2>
        <NoteForm initialNote={note} onSubmit={handleSubmit} />
      </Column>
    </Grid>
  )
}
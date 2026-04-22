import { useEffect } from 'react'
import { Grid, Column, InlineLoading, InlineNotification } from '@carbon/react'
import { useNotes } from '../context/NotesContext'
import { NoteCard } from '../components/NoteCard'
import { EmptyState } from '../components/EmptyState'

export function NotesListPage() {
  const { notes, loading, error, fetchNotes } = useNotes()

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  if (loading) return <InlineLoading description="Cargando notas..." />
  if (error) return <InlineNotification kind="error" title="Error" subtitle={error} hideCloseButton />

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <h2 style={{ margin: '2rem 0 1.5rem' }}>Mis notas</h2>
        {notes.length === 0 ? (
          <EmptyState />
        ) : (
          notes.map(note => <NoteCard key={note.id} note={note} />)
        )}
      </Column>
    </Grid>
  )
}
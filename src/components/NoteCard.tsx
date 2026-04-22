import { Tile, Tag, OverflowMenu, OverflowMenuItem } from '@carbon/react'
import type { Note } from '../types/note'
import { useNavigate } from 'react-router-dom'
import { useNotes } from '../context/NotesContext'

interface NoteCardProps {
  note: Note
}

export function NoteCard({ note }: NoteCardProps) {
  const navigate = useNavigate()
  const { deleteNote } = useNotes()

  const preview = note.content.length > 100
    ? note.content.slice(0, 100) + '...'
    : note.content

  const formattedDate = new Date(note.updatedAt).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Tile style={{ position: 'relative', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h4
          style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
          onClick={() => navigate(`/notes/${note.id}`)}
        >
          {note.title}
        </h4>
        <OverflowMenu aria-label="Opciones">
          <OverflowMenuItem itemText="Editar" onClick={() => navigate(`/notes/${note.id}`)} />
          <OverflowMenuItem itemText="Eliminar" isDelete onClick={() => deleteNote(note.id)} />
        </OverflowMenu>
      </div>
      <p style={{ color: '#525252', marginBottom: '0.75rem' }}>{preview}</p>
      <Tag type="cool-gray" size="sm">{formattedDate}</Tag>
    </Tile>
  )
}
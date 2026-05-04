import { Tile, Tag } from '@carbon/react'
import type { Note } from '../types/note'
import { useNavigate } from 'react-router-dom'

interface NoteCardProps {
  note: Note
}

export function NoteCard({ note }: NoteCardProps) {
  const navigate = useNavigate()

  const preview = note.content.length > 100
    ? note.content.slice(0, 100) + '...'
    : note.content

  const formattedDate = new Date(note.updatedAt).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Tile
      style={{ position: 'relative', marginBottom: '1rem', cursor: 'pointer' }}
      onClick={() => navigate(`/notes/${note.id}`)}
    >
      <h4 style={{ marginBottom: '0.5rem' }}>{note.title}</h4>
      <p style={{ color: '#525252', marginBottom: '0.75rem' }}>{preview}</p>
      <Tag type="cool-gray" size="sm">{formattedDate}</Tag>
    </Tile>
  )
}
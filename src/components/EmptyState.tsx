import { Tile } from '@carbon/react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@carbon/react'

export function EmptyState() {
  const navigate = useNavigate()

  return (
    <Tile style={{ textAlign: 'center', padding: '3rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>No tienes ninguna nota todavía</h3>
      <p style={{ marginBottom: '1.5rem', color: '#525252' }}>
        Crea tu primera nota y empieza a usar la IA para mejorarla
      </p>
      <Button onClick={() => navigate('/notes/new')}>Crear primera nota</Button>
    </Tile>
  )
}
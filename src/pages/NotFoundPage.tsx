import { Grid, Column, Button } from '@carbon/react'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Grid>
      <Column lg={16} md={8} sm={4} style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '6rem', margin: '0' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Página no encontrada</h2>
        <p style={{ color: '#525252', marginBottom: '2rem' }}>
          La página que buscas no existe.
        </p>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </Column>
    </Grid>
  )
}
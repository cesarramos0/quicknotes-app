import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction } from '@carbon/react'
import { Add } from '@carbon/icons-react'
import { useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  return (
    <Header aria-label="QuickNotes">
      <HeaderName href="/" prefix="Quick">
        Notes
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Nueva nota" onClick={() => navigate('/notes/new')}>
          <Add size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}
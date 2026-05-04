import { useState } from 'react'
import { Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, Modal } from '@carbon/react'
import { Add } from '@carbon/icons-react'
import { NoteForm } from './NoteForm'
import { useNotes } from '../context/NotesContext'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { createNote } = useNotes()

  const handleSubmit = async (title: string, content: string) => {
    await createNote(title, content)
    setOpen(false)
  }

  return (
    <>
      <Header aria-label="QuickNotes">
        <HeaderName href="/" prefix="Quick">
          Notes
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Nueva nota" onClick={() => setOpen(true)}>
            <Add size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>

      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        modalHeading="Nueva nota"
        passiveModal
      >
        <NoteForm onSubmit={handleSubmit} />
      </Modal>
    </>
  )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Content } from '@carbon/react'
import { Navbar } from './components/Navbar'
import { NotesListPage } from './pages/NotesListPage.tsx'
import { NoteFormPage } from './pages/NoteFormPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Content style={{ marginTop: '3rem' }}>
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/notes/new" element={<NoteFormPage />} />
          <Route path="/notes/:id" element={<NoteFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Content>
    </BrowserRouter>
  )
}

export default App
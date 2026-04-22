import '@carbon/styles/css/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NotesProvider } from './context/NotesContext'
import './index.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </StrictMode>,
)
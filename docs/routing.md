# Rutas y Navegación: QuickNotes

## Librería

Se usa **React Router v7** configurado en `src/App.tsx` con `BrowserRouter`.

---

## Estructura de rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `NotesListPage` | Lista de todas las notas |
| `/notes/new` | `NoteFormPage` | Formulario para crear una nota nueva |
| `/notes/:id` | `NoteFormPage` | Formulario para editar una nota existente |
| `*` | `NotFoundPage` | Página 404 para cualquier ruta no definida |

---

## Decisiones de diseño

**NoteFormPage reutilizada para crear y editar:** el componente detecta si hay un parámetro `id` en la URL con `useParams`. Si existe, entra en modo edición y carga la nota del backend. Si no existe, muestra el formulario vacío para crear.

**Eliminación sin ruta propia:** borrar una nota se hace directamente desde `NoteCard` en el listado, sin necesidad de una página dedicada.

**Navegación programática:** se usa `useNavigate` en los componentes para redirigir al usuario tras crear, editar o desde el estado vacío, en lugar de enlaces estáticos.

---

## Configuración en App.tsx

```tsx
<BrowserRouter>
  <Navbar />
  <Content>
    <Routes>
      <Route path="/" element={<NotesListPage />} />
      <Route path="/notes/new" element={<NoteFormPage />} />
      <Route path="/notes/:id" element={<NoteFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Content>
</BrowserRouter>
```

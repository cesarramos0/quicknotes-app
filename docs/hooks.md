# Hooks: QuickNotes

## Hooks de React utilizados

### useState

Gestiona el estado local de los componentes. Se usa en:

- `NoteForm` — para los valores de título, contenido, errores de validación y estados de carga
- `NoteFormPage` — para almacenar la nota cargada desde la API y su estado de carga
- `NotesContext` — para mantener la lista de notas, el estado de carga global y los errores

### useEffect

Ejecuta efectos secundarios cuando cambian las dependencias. Se usa en:

- `NotesListPage` — para llamar a `fetchNotes` al montar el componente y cargar las notas del backend
- `NoteFormPage` — para cargar la nota por ID cuando el componente recibe un parámetro `id` en la URL

### useCallback

Memoriza funciones para evitar que se recreen en cada render. Se usa en `NotesContext` para todas las acciones (`fetchNotes`, `createNote`, `updateNote`, `deleteNote`), ya que se pasan como dependencias a `useEffect` en los componentes hijos.

### useContext

Consume el contexto de notas. Se usa a través del custom hook `useNotes`, que encapsula `useContext(NotesContext)` y lanza un error si se usa fuera del `NotesProvider`.

---

## Custom hook: useNotes

Ubicación: `src/context/NotesContext.tsx`

Encapsula el acceso al `NotesContext` y añade una validación para asegurarse de que siempre se usa dentro del `NotesProvider`.

```typescript
export function useNotes() {
  const context = useContext(NotesContext)
  if (!context) throw new Error('useNotes debe usarse dentro de NotesProvider')
  return context
}
```

**Devuelve:**
- `notes` — lista de notas
- `loading` — estado de carga
- `error` — mensaje de error o null
- `fetchNotes` — carga todas las notas del backend
- `createNote` — crea una nota nueva
- `updateNote` — actualiza una nota existente
- `deleteNote` — elimina una nota por ID

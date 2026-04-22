# Context API: QuickNotes

## ¿Por qué Context API?

El estado de las notas necesita ser accesible desde múltiples componentes y páginas: `NotesListPage` para mostrarlas, `NoteCard` para eliminarlas, y `NoteFormPage` para crearlas o editarlas. Sin Context habría que pasar props manualmente por varios niveles, lo que haría el código más difícil de mantener.

Context API es suficiente para este proyecto porque el estado es simple: una lista de notas y sus operaciones CRUD.

---

## NotesContext

**Ubicación:** `src/context/NotesContext.tsx`

### Estado

| Campo | Tipo | Descripción |
|---|---|---|
| `notes` | `Note[]` | Lista de notas cargadas desde el backend |
| `loading` | `boolean` | True mientras hay una petición en curso |
| `error` | `string \| null` | Mensaje de error si falla una petición |

### Acciones

| Función | Descripción |
|---|---|
| `fetchNotes()` | Carga todas las notas del backend |
| `createNote(title, content)` | Crea una nota y la añade al estado |
| `updateNote(id, title, content)` | Actualiza una nota en el backend y en el estado |
| `deleteNote(id)` | Elimina una nota del backend y del estado |

---

## NotesProvider

Envuelve toda la aplicación en `src/main.tsx` para que cualquier componente pueda acceder al contexto:

```tsx
<NotesProvider>
  <App />
</NotesProvider>
```

---

## useNotes

Custom hook que simplifica el consumo del contexto. En lugar de importar `NotesContext` y `useContext` en cada componente, basta con:

```tsx
const { notes, loading, fetchNotes, deleteNote } = useNotes()
```

Si se usa fuera del `NotesProvider` lanza un error descriptivo para facilitar el debugging.

# Componentes: QuickNotes

## Navbar

Barra de navegación principal de la aplicación. Muestra el nombre de la app y un botón para crear una nota nueva.

**Props:** ninguna  
**Usa:** `useNavigate` para redirigir a `/notes/new`

---

## NoteCard

Tarjeta que representa una nota en el listado. Muestra el título, un fragmento del contenido y la fecha de última actualización. Incluye un menú con opciones para editar y eliminar.

**Props:**
- `note: Note` — la nota a mostrar

**Usa:** `useNotes` para acceder a `deleteNote`, `useNavigate` para ir a `/notes/:id`

---

## NoteForm

Formulario controlado reutilizable para crear y editar notas. Gestiona su propio estado de inputs, validación y estados de carga. Si recibe una nota existente (`initialNote`), muestra además los botones de IA.

**Props:**
- `initialNote?: Note` — nota existente en modo edición (opcional)
- `onSubmit: (title, content) => Promise<void>` — función que se ejecuta al guardar

**Comportamiento:**
- Valida que título y contenido no estén vacíos
- En modo edición muestra `AIActionButtons`
- Llama a `notesApi.applyAI` directamente y actualiza el textarea con el resultado

---

## AIActionButtons

Muestra los tres botones de acción de IA: Mejorar, Resumir y Expandir. Cuando hay una petición en curso muestra un indicador de carga en lugar de los botones.

**Props:**
- `onAction: (action: AIAction) => void` — función que recibe la acción seleccionada
- `loading: boolean` — si es true muestra el spinner

---

## EmptyState

Mensaje visual que se muestra cuando el usuario no tiene ninguna nota. Incluye un botón para crear la primera nota.

**Props:** ninguna  
**Usa:** `useNavigate` para redirigir a `/notes/new`

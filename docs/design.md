# Arquitectura de la Aplicación: QuickNotes

## 1. Estructura de componentes

```
App
├── Router
│   ├── / → NotesListPage
│   │   ├── NoteCard (x N)
│   │   │   └── AIActionButtons
│   │   └── EmptyState
│   ├── /notes/new → NoteFormPage
│   │   └── NoteForm
│   │       └── FormField
│   ├── /notes/:id → NoteFormPage (modo edición)
│   │   └── NoteForm
│   │       └── FormField
│   └── * → NotFoundPage
└── Layout
    └── Navbar
```

### Componentes reutilizables

| Componente | Descripción |
|---|---|
| `NoteCard` | Tarjeta que muestra título, fragmento del contenido y acciones (editar, eliminar, IA) |
| `NoteForm` | Formulario controlado para crear y editar notas (reutilizado en ambas páginas) |
| `FormField` | Input o textarea con label y mensaje de error, reutilizable |
| `AIActionButtons` | Botones de "Mejorar", "Resumir" y "Expandir" con estado de carga |
| `EmptyState` | Mensaje visual cuando no hay notas |
| `Navbar` | Barra de navegación con enlace a home y botón de nueva nota |
| `Spinner` | Indicador de carga genérico |
| `ErrorMessage` | Mensaje de error reutilizable |

---

## 2. Gestión del estado

Se utiliza **Context API** para compartir el estado de las notas entre componentes sin pasar props manualmente.

### `NotesContext`

```
NotesContext
├── state
│   ├── notes: Note[]         → lista de notas cargadas desde el backend
│   ├── loading: boolean      → true mientras se hace una petición
│   └── error: string | null  → mensaje de error si falla una petición
└── actions
    ├── fetchNotes()          → GET /api/v1/notes
    ├── createNote(data)      → POST /api/v1/notes
    ├── updateNote(id, data)  → PUT /api/v1/notes/:id
    └── deleteNote(id)        → DELETE /api/v1/notes/:id
```

Las acciones de IA **no forman parte del contexto** — se llaman directamente desde el componente que las necesita, ya que solo modifican el contenido temporalmente antes de guardar.

---

## 3. Diseño del Backend / API

Base URL: `/api/v1`

### Endpoints

| Método | Ruta | Descripción | Código éxito |
|---|---|---|---|
| GET | `/notes` | Obtener todas las notas | 200 |
| GET | `/notes/:id` | Obtener una nota por ID | 200 |
| POST | `/notes` | Crear una nota nueva | 201 |
| PUT | `/notes/:id` | Editar una nota existente | 200 |
| DELETE | `/notes/:id` | Eliminar una nota | 204 |
| POST | `/notes/:id/ai` | Aplicar acción de IA sobre una nota | 200 |

### Contratos de datos

**Modelo `Note`:**
```json
{
  "id": "string (uuid)",
  "title": "string",
  "content": "string",
  "createdAt": "string (ISO 8601)",
  "updatedAt": "string (ISO 8601)"
}
```

**POST /notes — body:**
```json
{ "title": "Mi nota", "content": "Contenido de la nota" }
```

**POST /notes/:id/ai — body:**
```json
{ "action": "improve" | "summarize" | "expand" }
```

**POST /notes/:id/ai — response:**
```json
{ "result": "Texto generado por la IA" }
```

**Errores estándar:**
```json
{ "error": "Mensaje descriptivo del error" }
```
Códigos: `400` (datos inválidos), `404` (nota no encontrada), `500` (error interno)

---

## 4. Persistencia

| Dato | Dónde se guarda |
|---|---|
| Notas (título, contenido, fechas) | Backend — array en memoria o fichero JSON |
| Preferencias de UI (ej. modo oscuro) | No aplica en esta versión |

El backend es la **única fuente de verdad** para las notas. El frontend no guarda notas en LocalStorage.

---

## 5. Rutas del frontend

| Ruta | Página | Descripción |
|---|---|---|
| `/` | `NotesListPage` | Lista de todas las notas |
| `/notes/new` | `NoteFormPage` | Formulario para crear una nota nueva |
| `/notes/:id` | `NoteFormPage` | Formulario para editar una nota existente |
| `*` | `NotFoundPage` | Página 404 para rutas no encontradas |

La eliminación de una nota se realiza desde `NotesListPage` (botón en cada `NoteCard`), sin ruta propia.

---

## 6. Diagrama de flujo de datos

![DiagramaFlujo](https://i.ibb.co/5xGdkXB7/Diagrama-en-blanco.png)

---

## 7. Decisiones de arquitectura

- **Context API sobre Zustand/Redux**: el estado de la app es simple (una lista de notas), no justifica una librería externa.
- **Array en memoria en el backend**: suficiente para este proyecto. Los datos se pierden al reiniciar el servidor, lo cual es aceptable en esta fase.
- **Acción IA en el backend, no en el frontend**: la API key de Anthropic nunca se expone al cliente. Toda llamada a Claude pasa por el servidor.
- **Un solo endpoint de IA** (`POST /notes/:id/ai`) con un campo `action`: evita duplicar lógica y mantiene la API limpia.
- **`NoteFormPage` reutilizada** para crear y editar: recibe el `id` por parámetro de ruta; si existe, carga la nota y activa el modo edición.
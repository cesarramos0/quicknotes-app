# Capa de Red y Cliente de API: QuickNotes

## Ubicación

`src/api/client.ts`

---

## Responsabilidad

El cliente de API centraliza todas las llamadas HTTP al backend. Ningún componente o página llama a `fetch` directamente — siempre lo hace a través de este módulo. Esto facilita cambiar la URL base, añadir headers globales o cambiar de `fetch` a `axios` sin tocar los componentes.

---

## Tipos

Los tipos están definidos en `src/types/note.ts` y son los mismos que usa el backend, garantizando que frontend y backend hablan el mismo contrato de datos:

```typescript
export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export type AIAction = 'improve' | 'summarize' | 'expand'
```

---

## Endpoints del cliente

| Función | Método | Ruta | Devuelve |
|---|---|---|---|
| `getAll()` | GET | `/api/v1/notes` | `Note[]` |
| `getById(id)` | GET | `/api/v1/notes/:id` | `Note` |
| `create(title, content)` | POST | `/api/v1/notes` | `Note` |
| `update(id, title, content)` | PUT | `/api/v1/notes/:id` | `Note` |
| `delete(id)` | DELETE | `/api/v1/notes/:id` | `void` |
| `applyAI(id, action)` | POST | `/api/v1/notes/:id/ai` | `string` |

---

## Gestión de estados de red

Cada función del cliente lanza un error si la respuesta no es `ok`. Los componentes y el contexto capturan ese error y actualizan su estado local:

| Estado | Cómo se gestiona |
|---|---|
| **Carga** | `loading: true` mientras se espera la respuesta |
| **Éxito** | Se actualiza el estado con los datos recibidos |
| **Error** | Se guarda el mensaje en `error` y se muestra al usuario con `InlineNotification` |

---

## URL base

La URL base está definida como constante en `client.ts`:

```typescript
const BASE_URL = 'http://localhost:3000/api/v1'
```

En el despliegue a producción esta URL se sustituirá por una variable de entorno de Vite (`import.meta.env.VITE_API_URL`).

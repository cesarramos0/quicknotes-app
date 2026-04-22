# Formularios: QuickNotes

## NoteForm

Ubicación: `src/components/NoteForm.tsx`

Formulario controlado para crear y editar notas. Se reutiliza en `NoteFormPage` tanto en modo creación como en modo edición.

---

## Estado del formulario

Cada campo del formulario tiene su propio estado gestionado con `useState`:

| Estado | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Valor del input de título |
| `content` | `string` | Valor del textarea de contenido |
| `titleError` | `string` | Mensaje de error del título |
| `contentError` | `string` | Mensaje de error del contenido |
| `submitting` | `boolean` | True mientras se envía el formulario |
| `aiLoading` | `boolean` | True mientras se procesa una acción de IA |
| `aiError` | `string` | Mensaje de error de la IA |

---

## Validación

La validación se ejecuta antes de enviar el formulario. Las reglas son:

- El título no puede estar vacío
- El contenido no puede estar vacío

Si algún campo falla, se muestra el mensaje de error debajo del input usando la prop `invalid` e `invalidText` de los componentes Carbon, y el envío se cancela.

---

## Flujo de envío

1. El usuario pulsa el botón de guardar
2. Se ejecuta la validación
3. Si hay errores, se muestran y se detiene el proceso
4. Si es válido, se llama a `onSubmit(title, content)` que viene por props
5. La página decide si crear o actualizar según si tiene `id` en la URL
6. Al terminar, redirige al listado

---

## Integración con IA

Cuando el formulario está en modo edición (`initialNote` existe), se muestran los botones de IA. Al pulsar uno:

1. Se llama a `notesApi.applyAI(id, action)` directamente desde el componente
2. El resultado reemplaza el contenido del textarea
3. El usuario puede revisar el resultado y guardar o descartar los cambios

# Idea del Proyecto: QuickNotes

## ¿Qué problema intenta resolver?

En el día a día, muchas personas necesitan tomar notas rápidas pero se encuentran con herramientas demasiado complejas o lentas. Además, una vez escritas las notas, mejorarlas o resumirlas requiere esfuerzo extra. QuickNotes resuelve esto permitiendo crear notas de forma inmediata y usando IA para mejorarlas, resumirlas o ampliarlas con un solo clic.

## Usuario objetivo

- Estudiantes que quieren tomar apuntes rápidos y luego organizarlos con ayuda de IA
- Profesionales que necesitan capturar ideas durante reuniones
- Cualquier persona que use notas en su día a día y quiera sacarles más partido

---

## Funcionalidades principales

- Crear notas con título y contenido
- Ver listado de todas las notas guardadas
- Editar y eliminar notas existentes
- Mejorar una nota con IA (mejor redacción, más clara)
- Resumir una nota con IA (versión corta del contenido)
- Persistencia de notas en el backend (Express + Node.js)

---

## Funcionalidades opcionales

- Búsqueda de notas por título o contenido
- Filtrado por fecha de creación
- Modo oscuro / claro
- Copiar nota al portapapeles con un clic
- Etiquetas o categorías para organizar notas
- Expandir nota con IA (ampliar el contenido con más detalle)

---

## Posibles mejoras futuras

- Autenticación de usuarios para tener notas privadas por cuenta
- Sincronización en la nube con base de datos real (PostgreSQL o MongoDB)
- Exportar notas a PDF o Markdown
- Colaboración en tiempo real con otros usuarios
- App móvil con React Native
- Historial de versiones de cada nota

---

## Tecnologías

- **Frontend**: React + TypeScript + Tailwind CSS + React Router
- **Backend**: Node.js + Express
- **IA**: Claude API (Anthropic)
- **Persistencia cliente**: LocalStorage para preferencias de UI
- **Persistencia servidor**: Array en memoria (backend) o fichero JSON

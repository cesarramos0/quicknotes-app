# Metodologías de Desarrollo Ágil

## ¿Qué es Agile?

Agile es una filosofía de desarrollo de software basada en la flexibilidad, la colaboración y la entrega continua de valor. En lugar de planificar todo el proyecto desde el principio y desarrollarlo de forma lineal, Agile propone dividir el trabajo en ciclos cortos donde se va construyendo, probando y mejorando de forma iterativa.

Su objetivo principal es adaptarse rápidamente a los cambios, ya sean cambios en los requisitos del cliente, en el mercado o en la tecnología, sin que eso suponga un problema grave para el proyecto. En lugar de ver el cambio como un obstáculo, Agile lo trata como algo natural y esperado.

Los valores clave de Agile, recogidos en el Manifiesto Ágil (2001), son:
- Las personas y sus interacciones por encima de los procesos y herramientas
- El software funcionando por encima de la documentación exhaustiva
- La colaboración con el cliente por encima de la negociación de contratos
- La respuesta al cambio por encima de seguir un plan rígido

---

## ¿Qué es Scrum?

Scrum es un framework concreto que aplica los principios de Agile. Define una serie de roles, eventos y artefactos que estructuran el trabajo del equipo de forma clara.

### Roles

- **Product Owner**: Es la persona responsable de definir qué se va a construir y en qué orden. Representa los intereses del cliente o del negocio y gestiona el Product Backlog.
- **Scrum Master**: Es quien facilita el proceso, elimina impedimentos y se asegura de que el equipo siga las prácticas de Scrum correctamente. No es un jefe, sino un facilitador.
- **Development Team**: El equipo de desarrollo, normalmente de 3 a 9 personas, que se encarga de construir el producto. Es autoorganizado y multifuncional.

### Sprints

Un Sprint es un período de tiempo fijo (normalmente de 1 a 4 semanas) durante el cual el equipo trabaja para completar un conjunto de tareas seleccionadas del backlog. Al final de cada Sprint se debe tener un incremento de producto potencialmente entregable.

### Backlog

- **Product Backlog**: Lista priorizada de todo lo que se quiere construir en el producto. Lo gestiona el Product Owner.
- **Sprint Backlog**: Subconjunto del Product Backlog que el equipo se compromete a completar durante un Sprint concreto.

### Eventos principales

- **Sprint Planning**: Reunión al inicio del Sprint donde el equipo decide qué tareas va a abordar.
- **Daily Scrum**: Reunión diaria de 15 minutos donde cada miembro explica qué hizo ayer, qué hará hoy y si tiene algún impedimento.
- **Sprint Review**: Al final del Sprint, el equipo muestra lo que ha construido a los stakeholders y recibe feedback.
- **Sprint Retrospective**: Reunión interna del equipo para reflexionar sobre el proceso y buscar mejoras para el siguiente Sprint.

---

## ¿Qué es Kanban?

Kanban es otro enfoque ágil para gestionar el trabajo, pero más visual y flexible que Scrum. Su idea central es representar el flujo de trabajo en un tablero dividido en columnas que representan los distintos estados por los que pasa una tarea.

Las columnas típicas son: **Backlog → Todo → In Progress → Review → Done**

Cada tarea se representa como una tarjeta que se va moviendo de izquierda a derecha según avanza. Uno de los principios clave de Kanban es el **WIP limit** (límite de trabajo en progreso): se limita el número de tareas que pueden estar en cada columna al mismo tiempo, lo que obliga al equipo a terminar lo que tiene antes de empezar cosas nuevas.

Kanban no impone roles fijos ni ciclos de tiempo definidos. El trabajo fluye de forma continua según la capacidad del equipo.

---

## Diferencias entre Scrum y Kanban

| Aspecto | Scrum | Kanban |
|---|---|---|
| Estructura de tiempo | Sprints fijos (1-4 semanas) | Flujo continuo, sin ciclos fijos |
| Roles definidos | Sí (PO, SM, Dev Team) | No hay roles obligatorios |
| Cambios durante el trabajo | No se permiten cambios dentro de un Sprint | Se pueden añadir tareas en cualquier momento |
| Métricas principales | Velocidad del equipo por Sprint | Tiempo de ciclo (cycle time) |
| Reuniones obligatorias | Sí (planning, daily, review, retro) | No hay reuniones obligatorias |
| Ideal para | Proyectos con entregas periódicas | Flujos de trabajo continuos |

---

## ¿Cuándo usar cada metodología?

### Usar Scrum cuando:
- El proyecto tiene un alcance definido pero los requisitos pueden cambiar.
- El equipo necesita estructura y ritmo de trabajo claro.
- Se quiere entregar valor de forma regular cada pocas semanas.
- Hay un cliente o stakeholder que puede dar feedback frecuente.
- El equipo es nuevo trabajando de forma ágil y necesita un marco guía.

### Usar Kanban cuando:
- El trabajo llega de forma continua e impredecible (por ejemplo, soporte técnico o mantenimiento).
- No hay necesidad de planificar por ciclos fijos.
- El equipo ya tiene madurez y puede autoorganizarse sin estructura rígida.
- Se quiere optimizar el flujo y reducir los cuellos de botella.
- El proyecto es pequeño o el equipo trabaja solo o en pareja.

---

## Conclusión

Tanto Agile, Scrum y Kanban comparten el mismo objetivo: entregar software de valor de forma eficiente y adaptable. La diferencia está en el nivel de estructura que cada uno impone. Scrum es más prescriptivo y ordenado, mientras que Kanban es más flexible y visual. En muchos equipos reales se usan combinaciones de ambos, lo que se conoce como **Scrumban**.

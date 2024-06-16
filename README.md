# Laboratorio 4: Variables

Cómo compilar el repositorio:

- Clona el proyecto
- Instala `npm install`
- Ejecuta `npm run dev`

**Ejercicio:**

Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

    Nombre del grupo / cantante / compositor (string).
    Año de fundación: cuando se formó el grupo (numero).
    Si está en activo (booleano).
    Género musical (string).

Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

    The Beatles / 1960 / Activo: true / 🎵 Pop Rock
    Queen / 1970 / Activo: false / 🎸 Rock
    AC DC / 1973 / Activo: true / 🤘 Hard Rock
    Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
    The Rolling Stones / 1962 / Activo: true / 🎸 Rock

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.

**Observaciones:**

- Para indicar el estado de la banda y traducir a lenguaje humano el booleano del estado de la banda, he usado un ternario que indica "en activo" si el estado active es true e "inactiva" si es false.

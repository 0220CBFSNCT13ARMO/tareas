# Tareas
1. Listado de tareas
2. Creación de tareas
3. Filtrado de tareas

### Temas
- Módulos nativos (fs)
- Métodos
- Objetos literales
- Funciones

### Micro desafío 1
- Cuando llegue por consola la palabra **listar** traer todas las tareas y listarlas

### Micro desafío 2
- Cuando llegue por consola la palabra **crear** más otro argumento que sea el nombre de la tarea deberá
    1. Tomar el nombre de la tarea y crear un objeto tarea
- Escribir el método **escribirJSON** que recibirá un array de tareas
    2. Utilizar el método **JSON.stringify()** para trasformar el array a formato JSON
    3. Utilizar el método de **fs.writeFileSync()** para escribir el JSON en el archivo.
- Escrbir el metodo **guardarTarea** que recibe el objeto tarea
    1. Este va a utilizar el metodo *leerJSON* y el metodo *escribirJSON*
    2. Deberá pushear dentro del array de tareas la nueva tarea

### Micro desafío 3 
- Cuando llegue la palabra **filtrar** por consola más el argumento que sea el nombre del estado
    1. Tomar el dato de que **estado** desea filtrar 
    2. Crear el metodo **leerPorEstado** que devuelve las tareas filtradas
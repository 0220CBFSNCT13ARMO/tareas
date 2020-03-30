let archivoTareas = require('./tareas');
let accion = process.argv[2];
let tareas = [];

switch(accion) {
    case 'listar':
        console.log();    
        console.log('Listado de tareas');
        console.log('----------------');

        tareas = archivoTareas.leerJSON();
        tareas.forEach((tarea, index) => {
            console.log((index + 1) + '. ' + tarea.titulo + ' -> ' + tarea.estado);
        });

        console.log()
        break;

    case 'crear':
        console.log();    
        console.log('Nueva tarea creada');
        console.log('------------------');

        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }

        archivoTareas.guardarTarea(tarea);

        console.log(tarea.titulo + ' -> ' + tarea.estado);
        console.log()
        break;    
    
    case 'filtrar':
        let estado = process.argv[3];

        console.log();
        console.log('Tareas ' + estado);
        console.log('------------------');
        
        
        let filtradas = archivoTareas.leerPorEstado(estado);
        
        filtradas.forEach((tarea) => {
            console.log(tarea.titulo)
        });

        break;

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar, ');
        break;
}

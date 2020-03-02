const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
};


const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })

.command('actualizar', 'actualizar el estado completado de una tarea', {
    descripcion,
    completado
})

.command('borrar', 'borrar una tarea', {
    descripcion
})


.help()
    .argv;

module.exports = {
    argv
}
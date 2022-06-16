
// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


console.log(saludar2('Pedro'))
console.log(saludar3('Juanita'))
console.log(saludar4());

const getUser = () =>{
    return {
        uid: 'ABC123',
        usernamer: 'El_Papi1502'
    }
}

console.log(getUser())

// Tarea
// 1. Transformar a una funcion de Flecha
// 2. Tiene que retornar un objeto
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        usernamer: nombre
    });


const usuarioActivo = getUsuarioActivo('Santiago');
console.log(usuarioActivo);
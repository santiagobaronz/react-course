
// Desestructuración de arreglos

const personajes = ['Jett','Sage','Killjoy'];
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1). El primer valor del arr se llamara nombre
// 2). El segundo se llamara setNombre

const funcionPruebba = (valor) => {
    return [valor, () => {console.log("Hola mundo")}]
}

const [nombre, setNombre] = funcionPruebba('Jesus');

console.log(nombre);
setNombre();
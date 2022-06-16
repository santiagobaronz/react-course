
// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 43,
    clave: 'Ironman',
}

// const {nombre, edad, clave} = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const getInformation = ({nombre, edad, clave, rango = 'Capitan'}) => {

    // console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 13.3213,
            lng: -12.3838
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = getInformation(persona);
console.log(nombreClave, anios);
console.log(lat);

// Objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5675347,
        lat: 12.4848,
        lng: 39.9349
    }
};

// console.table(persona);
console.log(persona);

// Asignacion de referencia, no hacerla. Usar spreed {...persona}

const persona2 = persona;
persona2.nombre = 'Peter'
console.log(persona2);
import { getHeroById, getHeroeByOwner } from "./bases/08-export-import";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {

//         const heroe = getHeroById(2);
//         resolve(heroe)
//         // reject('No se pudo encontrar el heroe')
//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log('Nombre del heroe: ', heroe.name);
// })
// .catch( err => console.warn(err))

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject) => {

    setTimeout(() => {

        const heroe = getHeroById(id);

        if(heroe){
            resolve(heroe)
        }else{
            reject('No se pudo encontrar el heroe')
        }

    }, 2000);

    });


}

getHeroeByIdAsync(2).then(console.log)
.catch(console.warn)
// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes'
import heroes from '../data/heroes'

// console.log(owners);

//Obtener dato por id

export const getHeroById = (id) => {
    return heroes.find( (heroe) => heroe.id === id)
}
// console.log(getHeroById(2));


// Obtener dato por dueño

export const getHeroeByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner)
}
// console.log(getHeroeByOwner('Marvel'));
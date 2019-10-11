import getData from '../utils/getData'
import nextPage from '../utils/nextPage'

function peopleController() {
    /**
 * 1° Hacer un request. /
 * 
 * 2° Mostrar 10 personajes.
 * 
 * 3° Apretar 'ver más' carga 10 personajes más.
 * 
 * 4° Apretar en 'Guardar', guarda el personaje en el localStorage y lo elimina de la página.
 */

    // "https://swapi.co/api/people/"
    
    getData('https://swapi.co/api/people/')
    nextPage()
}

export default peopleController

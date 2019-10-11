import getData from '../utils/getData'
import nextPage from '../utils/nextPage'

function peopleController() {
    
    // SWAPI URL "https://swapi.co/api/people/"
    
    getData('https://swapi.co/api/people/')
    nextPage()
}

export default peopleController

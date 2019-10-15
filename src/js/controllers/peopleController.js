import getData from '../utils/people/getData'
import nextPage from '../utils/people/nextPage'

// SWAPI URL "https://swapi.co/api/people/"

function peopleController() {
    
    getData('https://swapi.co/api/people/')
    nextPage()
    
}

export default peopleController

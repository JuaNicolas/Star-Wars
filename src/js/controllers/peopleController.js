import getData from '../utils/getData'
import nextPage from '../utils/nextPage'
import saveChar from '../utils/saveChar'

// SWAPI URL "https://swapi.co/api/people/"

function peopleController() {
    
    getData('https://swapi.co/api/people/')
    nextPage()
    
}

export default peopleController

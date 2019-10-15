import getData from '../utils/people/getData'
import showChars from '../utils/people/showChars'
import showError from '../utils/people/showError'

// SWAPI URL "https://swapi.co/api/people/"

export default function peopleController() {
    

    getData('https://swapi.co/api/people/', showChars, showError)
    
}


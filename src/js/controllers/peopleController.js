import getData from '../utils/Calls_API/getData'
import showCharacters from '../utils/people/showCharacters'
import showError from '../utils/people/showError'

// SWAPI URL "https://swapi.co/api/people/"

export default function peopleController() {
    getData('https://swapi.co/api/people/', showCharacters, showError)
}


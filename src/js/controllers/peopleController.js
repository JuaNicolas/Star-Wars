import getData from '../utils/people/getData'
import showCharacters from '../utils/people/showCharacters'
import showError from '../utils/people/showError'

// SWAPI URL "https://swapi.co/api/people/"

// Controller that hanbdlers the URL, display the data or error received.
export default function peopleController() {
    getData('https://swapi.co/api/people/', showCharacters, showError)
}


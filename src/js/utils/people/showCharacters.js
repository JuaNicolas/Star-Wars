import translater from './translater'
import saveChar from './saveChar'
import nextPage from './nextPage';
import searchCharacter from '../localStorage/searchChar';
import getData from './getData';
import showError from './showError';



export default function showCharacters(_data) {


    let tableBody = $('#tableBody')
    let charList = _data.results

    if (charList) {

        // For each character from the data.results list, select the inner data and put it in html
        for (let index = 0; index < charList.length; index++) {

            const char = charList[index]

            // Translate gender  - height - mass - color eyes
            translater(char)

            // Grab ID from the specific unique URL
            // let id = parseInt(char.url.slice(28, -1))

            // Search the character in the LocalStorage
            let searchChar = searchCharacter(char.id)

            // IF the character is not in the LocalStorage, then display it.
            if (!searchChar) {

                // Character root table row
                let character = $('<tr/>').attr('id', `char${char.id}`)

                // Character information: id - name - gender - height - mass - eye color and a save button
                let charId = $('<td scope="col">').text(`${char.id}`)
                let charName = $('<td scope="col">').text(`${char.name}`)
                let charGender = $('<td scope="col">').text(`${char.gender}`)
                let charHeight = $('<td scope="col">').text(`${char.height}`)
                let charMass = $('<td scope="col">').text(`${char.mass}`)
                let charEyes = $('<td scope="col">').text(`${char.eye_color}`)
                let charSave = $('<td scope="col">').append($('<button>').text('Guardar').addClass('btn btn-danger saveChar').attr('type', 'button'))

                // Create the Character row node.
                character.append(charId)
                    .append(charName)
                    .append(charGender)
                    .append(charHeight)
                    .append(charMass)
                    .append(charEyes)
                    .append(charSave)

                // Append the Character row node to the table body.
                tableBody.append(character)
            }
        }

        // Call getData if all the character results are already in the Local Storage
        // console.log(tableBody.children().length)
        let keepCallingAPI = tableBody.children().length === 0
        if (keepCallingAPI) {
            getData(_data.next, showCharacters, showError)
        }
    }

    // Once the HTML nodes are ready, it allows the user to save the character or search for the next page if possible.
    saveChar()
    nextPage(_data)
}
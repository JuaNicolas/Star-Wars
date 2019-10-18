import { getLocalList } from "./localStorage"
import deleteCharButton from './deleteChar'

export default function showSavedChars() {

    let savedCharList = getLocalList('chars')


    // Sort the objects inside the array saved in the LS despite the original order inside
    savedCharList.sort(function (a, b) {
        return a.charId - b.charId;
    });


    let tableBody = $('#tableBody')

    for (const charSaved of savedCharList) {
        let char = $('<tr/>').attr('id', `char${charSaved.charId}`)
        let charId = $('<td>').text(`${charSaved.charId}`)
        let charName = $('<td>').text(`${charSaved.charName}`)
        let charGender = $('<td>').text(`${charSaved.charGender}`)
        let charHeight = $('<td>').text(`${charSaved.charHeight}`)
        let charMass = $('<td>').text(`${charSaved.charMass}`)
        let charEyes = $('<td>').text(`${charSaved.charColorEyes}`)
        let charDelete = $('<td>').append($('<button>').text('Eliminar').addClass('btn btn-danger deleteChar').attr('type', 'button'))

        char.append(charId)
            .append(charName)
            .append(charGender)
            .append(charHeight)
            .append(charMass)
            .append(charEyes)
            .append(charDelete)
        tableBody.append(char)

    }

    deleteCharButton()
}

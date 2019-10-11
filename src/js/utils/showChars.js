import translater from './translater'
import saveChar from './saveChar'

let contador = 1

function showChars(data) {

    let tableBody = $('#tableBody')

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        // Translate gende and color eyes
        translater(element)

        let char = $('<tr/>').attr('id', `char${contador}`)
        let charId = $('<td>').text(`${contador}`)
        let charName = $('<td>').text(`${element.name}`)
        let charGender = $('<td>').text(`${element.gender}`)
        let charHeight = $('<td>').text(`${element.height} cm`)
        let charMass = $('<td>').text(`${element.mass} kg`)
        let charEyes = $('<td>').text(`${element.eye_color}`)
        let charSave = $('<td>').append($('<button>').text('Guardar').addClass('btn btn-danger saveChar').attr('type', 'button'))

        contador++

        char.append(charId)
            .append(charName)
            .append(charGender)
            .append(charHeight)
            .append(charMass)
            .append(charEyes)
            .append(charSave)
        tableBody.append(char)

    }

    saveChar()
}

export default showChars
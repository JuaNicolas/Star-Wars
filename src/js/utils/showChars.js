import translater from './translater'
import saveChar from './saveChar'


function showChars(data) {

    let tableBody = $('#tableBody')
    
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        
        // Translate gender  - height - mass - color eyes
        translater(element)
        
        let id = element.url.slice(28, -1)

        let char = $('<tr/>').attr('id', `char${id}`)
        let charId = $('<td>').text(`${id}`)
        let charName = $('<td>').text(`${element.name}`)
        let charGender = $('<td>').text(`${element.gender}`)
        let charHeight = $('<td>').text(`${element.height}`)
        let charMass = $('<td>').text(`${element.mass}`)
        let charEyes = $('<td>').text(`${element.eye_color}`)
        let charSave = $('<td>').append($('<button>').text('Guardar').addClass('btn btn-danger saveChar').attr('type', 'button'))

        

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
import { getLocalList } from "./localStorage"

export default function showSavedChars() {
    console.log('guardados')

    let sol = getLocalList('chars')

    console.log(sol)

    let tableBody = $('#tableBody')

    sol.forEach(solcito => {

        console.log(solcito.charName)

        let char = $('<tr/>').attr('id', `char${solcito.charId}`)
        let charId = $('<td>').text(`${solcito.charId}`)
        let charName = $('<td>').text(`${solcito.charName}`)
        let charGender = $('<td>').text(`${solcito.charGender}`)
        let charHeight = $('<td>').text(`${solcito.charHeight}`)
        let charMass = $('<td>').text(`${solcito.charMass}`)
        let charEyes = $('<td>').text(`${solcito.charColorEyes}`)
        let charDelete = $('<td>').append($('<button>').text('Eliminar').addClass('btn btn-danger deleteChar').attr('type', 'button'))

        char.append(charId)
            .append(charName)
            .append(charGender)
            .append(charHeight)
            .append(charMass)
            .append(charEyes)
            .append(charDelete)
        tableBody.append(char)
    })

}

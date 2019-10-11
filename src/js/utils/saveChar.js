import { setLocalList } from './localStorage'

let savedChars = []

function saveChar() {

    let btn = $('.saveChar')

    btn.on('click', function () {

        let charRow = $(this).parent().parent()

        let charId = $(this).parent().prev().prev().prev().prev().prev().prev().text()
        let charName = $(this).parent().prev().prev().prev().prev().prev().text()
        let charGender = $(this).parent().prev().prev().prev().prev().text()
        let charHeight = $(this).parent().prev().prev().prev().text()
        let charMass = $(this).parent().prev().prev().text()
        let charColorEyes = $(this).parent().prev().text()


        let char = {
            charId, 
            charName, 
            charGender, 
            charHeight, 
            charMass, 
            charColorEyes
        }

        savedChars.push(char)
        console.log(savedChars)

        setLocalList('chars', savedChars)

        charRow.fadeOut(1000, function () {
            charRow.remove()
        })
    })

}

export default saveChar
import { setLocalList, getLocalList } from '../localStorage/localStorage'

export default function saveChar () {

    let savedChars = getLocalList('chars')

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
        setLocalList('chars', savedChars)

        charRow.fadeOut(1250, function () {
            charRow.remove()
        })

    })
}
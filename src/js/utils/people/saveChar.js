import { setLocalList, getLocalList } from '../localStorage/localStorage'

export default function saveChar() {

    // Get the Local List 'chars' => if  exist ? @array : @emptyArray
    let charList = getLocalList('chars')

    // When the user click on the button
    $('.saveChar').off().one('click', function () {
    
        // Selects all the td.button siblings and loop through them
        let row = $(this).parent().siblings()

        // Creates a char object and push information inside
        let char = {}

        for (let index = 0; index < row.length; index++) {
            const element = row[index].innerText;

            switch (index) {
                case 0:
                    char['charId'] = element
                    break;
                case 1:
                    char['charName'] = element
                    break;
                case 2:
                    char['charGender'] = element
                    break;
                case 3:
                    char['charHeight'] = element
                    break;
                case 4:
                    char['charMass'] = element
                    break;
                case 5:
                    char['charColorEyes'] = element
                    break;
                default:
                    break;
            }
        }


        // Save the char in the Local Storage
        charList.push(char)
        setLocalList('chars', charList)

        // FadeOut the character row and eliminates it from the DOM
        let charRow = $(this).parent().parent()
        charRow.fadeOut(500, function () {
            charRow.remove()
        })
    })
}

// export default function saveChar () {

//     let savedChars = getLocalList('chars')

//     let btn = $('.saveChar')

//     btn.on('click', function () {

//         let charRow = $(this).parent().parent()

//         let charId = $(this).parent().prev().prev().prev().prev().prev().prev().text()
//         let charName = $(this).parent().prev().prev().prev().prev().prev().text()
//         let charGender = $(this).parent().prev().prev().prev().prev().text()
//         let charHeight = $(this).parent().prev().prev().prev().text()
//         let charMass = $(this).parent().prev().prev().text()
//         let charColorEyes = $(this).parent().prev().text()

//         let char = {
//             charId,
//             charName,
//             charGender,
//             charHeight,
//             charMass,
//             charColorEyes
//         }

//         savedChars.push(char)
//         setLocalList('chars', savedChars)

//         charRow.fadeOut(1250, function () {
//             charRow.remove()
//         })

//     })
// }
import { getLocalList, setLocalList } from "./localStorage"

export default function deleteChar() {

    let deleteButton = $('.deleteChar')
    let savedChars = getLocalList('chars')


    deleteButton.on('click', function () {

        let row = $(this).parent().siblings()
        let charRow = $(this).parent().parent()
        // let charId = parseInt($(this).parent().prev().prev().prev().prev().prev().prev().text())

        for (let index = 0; index < row.length; index++) {
            const element = row[index].innerText;
            switch (index) {
                case 0:

                    let id = element

                    savedChars.forEach((element, index) => {

                        if (element.charId == id) {

                            savedChars.splice(index, 1)

                            setLocalList('chars', savedChars)

                            charRow.fadeOut(250, function () {
                                charRow.remove()
                            })
                        }
                    })
                    break;

                default:
                    break;
            }
        }
        // Delete LS once its empty
        let emptyArray = savedChars.length === 0

        if (emptyArray) {
            window.localStorage.clear()
        }
    })
}

// deleteButton.on('click', function () {

//     let charRow = $(this).parent().parent()

//     let charId = parseInt($(this).parent().prev().prev().prev().prev().prev().prev().text())


//     savedChars.forEach((element, index) => {

//         if (element.charId == charId) {

//             savedChars.splice(index, 1)
//             // console.log(savedChars[index])

//             setLocalList('chars', savedChars)

//             charRow.fadeOut(250, function () {
//                 charRow.remove()
//             })
//         }
//     })

//     // Delete LS once its empty
//     let emptyArray = savedChars.length === 0

//     if (emptyArray) {
//         window.localStorage.clear()
//     }
// })
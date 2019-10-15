import { getLocalList, setLocalList } from "./localStorage"

export default function deleteChar() {

    let btn = $('.deleteChar')
    let savedChars = getLocalList('chars')

    btn.on('click', function () {

        let charRow = $(this).parent().parent()

        let charId = parseInt($(this).parent().prev().prev().prev().prev().prev().prev().text())


        savedChars.forEach((element, index) => {

            if (element.charId == charId) {

                savedChars.splice(index, 1)
                // console.log(savedChars[index])

                setLocalList('chars', savedChars)

                charRow.fadeOut(1250, function () {
                    charRow.remove()
                })
            }
        })

        // Delete LS once its empty
        let emptyArray = savedChars.length === 0
        
        if (emptyArray) {
            window.localStorage.clear()
        }
    })

}
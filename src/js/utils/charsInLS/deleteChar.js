import { getLocalList, setLocalList } from "../localStorage/localStorage"

export default function deleteChar() {

    let deleteButton = $('.deleteChar')
    let savedChars = getLocalList('chars')


    deleteButton.one('click', function () {

        let row = $(this).parent().siblings()
        let charRow = $(this).parent().parent()

        const charId = row[0].innerText

        // Loops through the characters saved and deletes the once with same ID as the click
        savedChars.forEach((element, index) => {

            if (element.charId == charId) {

                savedChars.splice(index, 1)
                setLocalList('chars', savedChars)

                charRow.fadeOut(250, function () {
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
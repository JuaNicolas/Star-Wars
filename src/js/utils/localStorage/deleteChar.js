import { getLocalList, setLocalList } from "./localStorage"

// En esta función "deleteChar" tenés un switch con un sólo "case" que es '0', esto es, por lo pronto, innecesario. Si tenés un switch de una sola condición, hace un "if" y listo.

export default function deleteChar() {

    let deleteButton = $('.deleteChar')
    let savedChars = getLocalList('chars')


    deleteButton.one('click', function () {

        let row = $(this).parent().siblings()
        let charRow = $(this).parent().parent()

        for (let index = 0; index < row.length; index++) {
            const element = row[index].innerText;

            // For the ID loops
            if (index == 0) {

                // Takes innerHTML text as ID
                let id = element

                // Loops through the characters saved and deletes the once with same ID as the click
                savedChars.forEach((element, index) => {

                    if (element.charId == id) {

                        savedChars.splice(index, 1)
                        setLocalList('chars', savedChars)
                        
                        charRow.fadeOut(250, function () {
                            charRow.remove()
                        })
                    }
                })
            }
        }
        // Delete LS once its empty
        let emptyArray = savedChars.length === 0

        if (emptyArray) {
            window.localStorage.clear()
        }
    })
}
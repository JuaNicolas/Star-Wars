import { getLocalList, setLocalList } from "./localStorage"

export default function deleteChar() {

    let btn = $('.deleteChar')

    btn.on('click', function () {

        let charRow = $(this).parent().parent()

        let charId = parseInt($(this).parent().prev().prev().prev().prev().prev().prev().text())

        let savedChars = getLocalList('chars')

        savedChars.forEach((element, index) => {

            if (element.charId == charId) {

                savedChars.splice(index, 1)
                console.log(savedChars[index])

                setLocalList('chars', savedChars)

                charRow.fadeOut(1250, function () {
                    charRow.remove()
                })
            }
        })
    })

}
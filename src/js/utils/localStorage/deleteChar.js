
export default function deleteChar() {

    let btn = $('.deleteChar')

    btn.on('click', function () {

        let charRow = $(this).parent().parent()

        // let charId = parseInt($(this).parent().prev().prev().prev().prev().prev().prev().text())

        charRow.fadeOut(1250, function () {
            charRow.remove()
        })
    })

}
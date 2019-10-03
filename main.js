$(document).ready(function () {

    let btn = $('#myButton')

    btn.on('click', function () {
        let firstRow = $('#1')
        firstRow.fadeOut(2000, function () {
            firstRow.remove()
        })
    })  
})
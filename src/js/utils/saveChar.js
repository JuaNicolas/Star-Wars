
function saveChar() {
    
    let btn = $('.saveChar')
    
    btn.on('click', function () {
        console.log(btn)
        let charRow = $(this).parent().parent()
        console.log(charRow)
        
        charRow.fadeOut(1000, function () {
            charRow.remove()
        })
    })

}

export default saveChar
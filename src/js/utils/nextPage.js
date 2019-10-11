import checkNextPage from './checkNextPage'

function nextPage() {
    let seeMoreBtn = $('#seeMore')
    console.log(seeMoreBtn)
    console.log('hola');

    seeMoreBtn.click( function () {
        console.log('hola de nuevo')
        checkNextPage()
    })

    
}


export default nextPage
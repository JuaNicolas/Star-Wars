import checkNextPage from './checkNextPage'

function nextPage() {
    
    let seeMoreBtn = $('#seeMore')

    seeMoreBtn.click( function () {
        checkNextPage()
    })

    
}


export default nextPage
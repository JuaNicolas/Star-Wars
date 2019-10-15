import searchIfNextPage from './checkNextPage'

export default function nextPage() {
    
    let seeMoreBtn = $('#seeMore')

    seeMoreBtn.click( function () {
        searchIfNextPage()
    })

}

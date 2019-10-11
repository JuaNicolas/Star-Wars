import getData from './getData'


function nextPage() {
    let seeMoreBtn = $('#seeMore')
    console.log(seeMoreBtn)
    console.log('hola');

    let page = 2
    
    seeMoreBtn.click( function () {
        console.log('hola de nuevo')
        if (page != 10) {
            getData(`https://swapi.co/api/people/?page=${page}`)
            page++
        }
    })
}



export default nextPage
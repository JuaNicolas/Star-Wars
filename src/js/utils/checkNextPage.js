import getData from './getData'

let url = 'https://swapi.co/api/people'
function checkNextPage() {
    console.log('entro aca')

    $.ajax(url)
        .done(function (data) {
            if (data.next) {
                console.log(data.next)
                getData(data.next)
            }
            return url = data.next
        })
        .fail(function (error) {
            showError(error)
        })
}

export default checkNextPage
import getData from './getData'

let url = 'https://swapi.co/api/people'

export default function searchIfNextPage() {
   
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

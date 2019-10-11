import showChars from './showChars'

function getData(url) {
    $.ajax(url)
        .done(function (data) {
            showChars(data.results)
        })
        .fail(function (error) {
            showError(error)
        })
}

function showError(_error) {
    console.log("El error es: " + _error);
}

export default getData
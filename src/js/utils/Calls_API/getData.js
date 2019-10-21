export default function getData(_url, _showResults, _showError) {

    let result = $.ajax({
        url: _url,
        method: "GET"
    })

    result.done(function (data) {
        _showResults(data)
    });

    result.fail(function (error) {
        _showError(error)
    })
}


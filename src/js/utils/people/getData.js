export default function getData(_url, _showChars, _showError) {

    var result = $.ajax({
        url: _url,
        method: "GET"
    })

    result.done(function (data) {
        _showChars(data)
    });

    result.fail(function (error) {
        _showError(error)
    })
}


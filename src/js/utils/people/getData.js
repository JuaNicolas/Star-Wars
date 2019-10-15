import showChars from "./showChars";
import showError from "./showError";

export default function getData(url) {
    $.ajax(url)
        .done(function (data) {
            showChars(data.results)
        })
        .fail(function (error) {
            showError(error)
        })
}



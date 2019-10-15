import getData from "./getData"
import showChars from "./showChars"
import showError from "./showError"

export default function nextPage(data) {
    console.log(data)

    let nextBtn = $('#seeMore')

    if (!data.next) {
        nextBtn.attr("disabled", true)
    } else {
        nextBtn.off().click(function () {
            getData(data.next, showChars, showError)
        })
    }
}
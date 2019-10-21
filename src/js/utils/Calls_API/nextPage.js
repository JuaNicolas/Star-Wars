import getData from "./getData"
import showChars from "../people/showCharacters"
import showError from "../people/showError"

export default function nextPage(data) {
    
    let nextBtn = $('#seeMore')

    // If there is not a next page to navigate, it disables the next page button
    if (!data.next) {
        nextBtn.attr("disabled", true)
    } else {
        // .off() prevents the multi fireing
        nextBtn.off().click(function () {
            getData(data.next, showChars, showError)
        })
    }
}
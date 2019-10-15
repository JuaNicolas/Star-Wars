import enableButton from "./enableButton"

export default function updateClase(node, condition) {

    if (condition) {
        node.addClass('is-valid')
        node.removeClass('is-invalid')
    } else {
        node.addClass('is-invalid')
        node.removeClass('is-valid')
    }

    enableButton()

}

import enableButton from '../utils/enableButton'

let updateClase = (node, condition) => {

    if (condition) {
        node.addClass('is-valid')
        node.removeClass('is-invalid')
        enableButton()
    } else {
        node.addClass('is-invalid')
        node.removeClass('is-valid')
    }
    enableButton()
}

export default updateClase
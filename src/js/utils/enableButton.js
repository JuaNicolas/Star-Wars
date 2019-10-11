let enableButton = () => {

    let button = $('#button')

    let name = $('#inputName').hasClass('is-valid')
    let email = $('#inputEmail').hasClass('is-valid')
    let comment = $('#inputComment').hasClass('is-valid')

    let enableIt = name && email && comment

    if (enableIt) {
        button.attr("disabled", false)
        button.removeClass('btn-dark').addClass('btn-success')
    } else {
        button.attr("disabled", true)
    }
}

export default enableButton
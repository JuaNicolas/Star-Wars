let inputEmail = $('#inputEmail')

$(document).ready(function () {
    inputEmail.blur(function () {

        let inputValue = $(this).val()

        let isValid = inputValue.indexOf('@') != -1
            && inputValue.indexOf('.com') != -1

        if (isValid) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    })
})
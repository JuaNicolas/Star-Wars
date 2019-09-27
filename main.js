// Inicio
$(document).ready(function () {

    // Ejecutar Nombre
    $('#inputName').one('blur', function () {
        validName($(this))
        validFields()

    }).change(function () {
        validName($(this))
        validFields()
    })

    // Validar Nombre
    let validName = (_e) => {

        let validation = typeof _e.val() == 'string'
            && _e.val() != null
            && _e.val().length > 0

        if (validation) {
            _e.addClass('is-valid')
            _e.removeClass('is-invalid')
        } else {
            _e.addClass('is-invalid')
            _e.removeClass('is-valid')
        }
    }

    // Ejecutar Email
    $('#inputEmail').one('blur', function () {
        validEmail($(this))
        validFields()

    }).change(function () {
        validEmail($(this))
        validFields()
    })

    // Validar Email
    let validEmail = (_e) => {

        let validation = _e.val().length > 8
            && _e.val().indexOf('@') != 1
            && _e.val().indexOf('.con') != 1

        if (validation) {
            _e.addClass('is-valid')
            _e.removeClass('is-invalid')
        } else {
            _e.addClass('is-invalid')
            _e.removeClass('is-valid')
        }
    }

    // Ejecutar Comentario
    $('#inputComment').one('blur', function () {
        validComment($(this))
        validFields()
    }).change(function () {
        validComment($(this))
        validFields()
    })

    // Validar Comentario
    let validComment = (_e) => {

        let validation = _e.val() != null
            && _e.val().length > 0

        if (validation) {
            _e.addClass('is-valid')
            _e.removeClass('is-invalid')
        } else {
            _e.addClass('is-invalid')
            _e.removeClass('is-valid')
        }
    }

    // Ejecutar Boton
    // $('button').on('click', function () {

    // })
    // Validar Boton
    validFields = () => {

        let name = $('#inputName').hasClass('is-valid')
        let email = $('#inputEmail').hasClass('is-valid')
        let comment = $('#inputComment').hasClass('is-valid')

        let isValid = name
            && email
            && comment

        console.log(isValid)
        if (isValid) {
            console.log('entro')
            $('#button').removeAttr('disabled')
        }
    }

})
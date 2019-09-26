let validName = (_e) => {

    let validation = typeof _e.val() == 'string'
        && _e.val() != null
        && _e.val().length > 0

    return validation
}

$(document).ready(function () {

    $('#inputName').one('blur', function () {

        if (validName($(this))) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    }).change(function () {
        if (validName($(this))) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    })
})

let validEmail = (_e) => {

    let validation = validName(_e)
        && _e.val().length > 8
        && _e.val().indexOf('@') != 1
        && _e.val().indexOf('.con') != 1

    return validation
}

$(document).ready(function () {

    $('#inputEmail').one('blur', function () {

        if (validEmail($(this))) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    }).change(function () {
        if (validEmail($(this))) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    })
})

let validComment = (_e) => {

    let validation = validName(_e)

    return validation
}

$(document).ready(function () {

    $('#inputComment').one('blur', function () {

        if (validComment($(this))) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    }).change(function () {
        if (validComment($(this))) {
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
        } else {
            $(this).addClass('is-invalid')
            $(this).removeClass('is-valid')
        }
    })
})
/**
 * !Orden de Funciones
 * 
 * ? Actualizar la clase (valid - invalid)
 *  *Dentro de esta función se intercambia entre 'valid' / 'in-valid', a su vez, se ejecuta enableButton para detectar si el BOTON ENVIAR debe habilkitarse o no
 * 
 * ? Otorgar mensaje de feedback por nombre
 *  *Mensaje personañlizado para un feedback positivo/negativo
 * 
 * ? Otorgar mensaje de feedback por email
 *  *Mensaje personañlizado para un feedback positivo/negativo
 * 
 * ? Ejecutar Nombre
 *  *Se ejecutan los eventos sobre NOMBRE
 * ? Validar Nombre
 *  *Se verifica si cumple o no los requisitos
 * 
 * ? Ejecutar Email
 *  *Se ejecutan los eventos sobre EMAIL
 * ? Validar Email
 *  *Se verifica si cumple o no los requisitos
 * 
 * ? Ejecutar Comentario
 *  *Se ejecutan los eventos sobre COMENTARIO
 * ? Validar Comentario
 *  *Se verifica si cumple o no los requisitos
 * 
 * ? Habilitar el Botón Enviar
 *  *Se verifica si cumple o no los requisitos
 * 
 */

// Funciones

// Inicio
function contactController() {

    // Actualizar la clase (valid - invalid)
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

    // Otorgar mensaje de feedback por nombre
    let nameFeedback = (node, condition) => {

        let feedbackNode = node.next()

        if (condition) {
            feedbackNode.text('Nombre válido').addClass('text-success').removeClass('text-danger')
        } else {
            feedbackNode.text('Por favor, ingrese un nombre válido').addClass('text-danger').removeClass('text-success')
        }

    }

    // Otorgar mensaje de feedback por email
    let emailFeedback = (node, condition) => {

        let feedbackNode = node.next()

        let hasNotHash = node.val().indexOf('@') == -1
        let hasNotDotCom = node.val().indexOf('.com') == -1
        let hasNone = hasNotDotCom && hasNotHash

        if (condition) {
            feedbackNode.text('Email válido')
                .addClass('text-success')
                .removeClass('text-danger')

        } else if (hasNone) {
            feedbackNode.text('Por favor, ingrese un email válido (@ .com)')
                .addClass('text-danger')
                .removeClass('text-success')

        } else if (hasNotDotCom) {
            feedbackNode.text('Por favor, ingrese un email válido (.com)')
                .addClass('text-danger')
                .removeClass('text-success')

        } else if (hasNotHash) {
            feedbackNode.text('Por favor, ingrese un email válido (@)')
                .addClass('text-danger')
                .removeClass('text-success')
        }
    }

    // Ejecutar Nombre
    $('#inputName').one('blur', function () {

        validName($(this))

    }).keyup(function () {

        validName($(this))
    })

    // Validar Nombre
    let validName = (_e) => {

        let validation = typeof _e.val() === 'string'
            && _e.val().length > 1

        updateClase(_e, validation)
        nameFeedback(_e, validation)
    }

    // Ejecutar Email
    $('#inputEmail').one('blur', function () {
        validEmail($(this))
    }).keyup(function () {
        validEmail($(this))
    })

    // Validar Email
    let validEmail = (_e) => {

        let validation = _e.val().indexOf('@') > -1
            && _e.val().indexOf('.com') > -1

        updateClase(_e, validation)
        emailFeedback(_e, validation)
    }

    // Ejecutar Comentario
    $('#inputComment').one('blur', function () {

        validComment($(this))

    }).keyup(function () {

        validComment($(this))
    })

    // Validar Comentario
    let validComment = (_e) => {

        let validation = _e.val() != null
            && _e.val().length > 0
            && _e.val() != ''

        updateClase(_e, validation)
    }

    // Habilitar el Botón Enviar
    let enableButton = () => {

        let button = $('#button')

        let name = $('#inputName').hasClass('is-valid')
        let email = $('#inputEmail').hasClass('is-valid')
        let comment = $('#inputComment').hasClass('is-valid')

        let enableIt = name && email && comment

        if (enableIt) {
            console.log('entro')
            button.attr("disabled", false)
            console.log(button)
        } else {
            button.attr("disabled", true)
        }
    }
}

export default contactController
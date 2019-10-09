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

//  Modelo, Vista y Controlador

// Vista

$(document).ready(function () {

    let root = $('#app')
    root.addClass('container')

    let form = $('<form>')

    let name = `
        <div class="row my-2">
            <div class= "col-12 col-md-8 offset-md-2" >
                <input type="text" id="inputName" class="form-control" placeholder="Nombre">
                <p id="nameFeedback" class="my-1"></p>
            </div>
        </div>`

    let email = `
        <div class="row my-2">
            <div class="col-12 col-md-8 offset-md-2">
                <input type="text" id="inputEmail" class="form-control" placeholder="Email">
                <p id="emailFeedback" class="my-1"></p>
            </div>
        </div>`

    let comment = `
        <div class="row my-2">
            <div class="col-12 col-md-8 offset-md-2">
                <textarea class="form-control" name="inputComment" id="inputComment" cols="30" rows="5"
             placeholder="Por favor, ingrese un comentario"></textarea>
            </div>
        </div>`

    let submit = `
        <div class="row my-2">
            <div class="col-12 col-md-8 offset-md-2">
                <button id="button" class="btn btn-block btn-success" disabled>Enviar</button>
            </div>
        </div>`


    form.append(name, email, comment, submit)


    root.append(form)

})



// Funciones v

// Inicio
$(document).ready(function () {

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
})
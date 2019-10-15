import updateClase from './updateClass'
import { nameFeedback, emailFeedback } from './feedback'

// Validar Nombre
export function validName(_e) {

    let validation = typeof _e.val() === 'string'
        && _e.val().length > 1

    updateClase(_e, validation)
    nameFeedback(_e, validation)
}

// Validar Email
export function validEmail(_e) {

    let validation = _e.val().indexOf('@') > -1
        && _e.val().indexOf('.com') > -1

    updateClase(_e, validation)
    emailFeedback(_e, validation)
}

// Validar Comentario
export function validComment(_e) {

    let validation = _e.val() != null
        && _e.val().length > 0
        && _e.val() != ''

    updateClase(_e, validation)
}

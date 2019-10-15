export function nameFeedback(node, condition) {

    // Grab the next html tag, in this case it is <p>
    let feedbackNode = node.next()
    
    // Check if it fulfil the requirements and execute
    if (condition) {
        feedbackNode.text('Nombre válido').addClass('text-success').removeClass('text-danger')
    } else {
        feedbackNode.text('Por favor, ingrese un nombre válido').addClass('text-danger').removeClass('text-success')
    }
    
}

// Validar Comentario
export function  emailFeedback(node, condition) {
    
    // Grab the next html tag, in this case it is <p>
    let feedbackNode = node.next()
    
    let hasNotHash = node.val().indexOf('@') == -1
    let hasNotDotCom = node.val().indexOf('.com') == -1
    let hasNone = hasNotDotCom && hasNotHash
    
    // Check if it fulfil the requirements and execute
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


// Function to enable the submit button in the form contact page.

export default function enableButton() {

    // Select the button with ID button
    let button = $('#buttonSend')

    // Check if it all the requirements are fulfil
    let name = $('#inputName').hasClass('is-valid')
    let email = $('#inputEmail').hasClass('is-valid')
    let comment = $('#inputComment').hasClass('is-valid')

    let enableIt = name && email && comment

    // Execute
    if (enableIt) {
        button.attr("disabled", false)
        button.removeClass('btn-dark').addClass('btn-success')
    } else {
        button.attr("disabled", true)
    }
}

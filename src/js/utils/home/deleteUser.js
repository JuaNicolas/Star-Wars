export default function deleteUser() {
 
    $('.deleteUser').off().on('click', function () {
               
        // If the user is deleted all the localStorage is deleted as well
        window.localStorage.clear()
        // Refresh the page for a new user entry
        location.reload()
    })
    
}
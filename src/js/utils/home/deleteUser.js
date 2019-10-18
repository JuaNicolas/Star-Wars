export default function deleteUser() {
 
    $('.deleteUser').on('click', function () {
               
        console.log('delete')
        // If the user is deleted all the localStorage is deleted as well
        window.localStorage.clear()
        // Refresh the page for a new user entry
        location.reload()
    })
    
}
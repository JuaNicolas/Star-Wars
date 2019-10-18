import deleteUser from "./deleteUser"

export default function userNode(_user) {


    // Removes the addUser html
    $('.openModal').remove()
    $('.h1').remove()
    
    let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido! ${_user}`)
    let userDelete = $('<button class="btn btn-danger deleteUser">').text('eliminar usuario')


    $('.userCol').append(userNode).append(userDelete)

    deleteUser()

}
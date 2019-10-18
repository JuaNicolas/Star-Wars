import { getLocalList, setLocalList } from "../localStorage/localStorage"
import userNodeDOM from "./userNodeDOM"

export default function saveUser() {

    $('#buttonSend').off().on('click', function () {
       
        // Receive the input value and insert it in a user Object to push into an Array. It can only be one user per localStorage.
        let userName = $('#newUser').val()
        let userObj = { userName }
        let userObjName = userObj.userName

        let user = getLocalList('user')
        user.push(userObj)
        setLocalList('user', user)

        // Hide the modal
        $('.modal').modal('toggle')

        userNodeDOM(userObjName)
        // let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido! ${user[0].userName}`)
        // let userDelete = $('<button class="btn btn-danger deleteUser">').text('eliminar usuario')
        // $('.userCol').append(userNode).append(userDelete)
    })

}
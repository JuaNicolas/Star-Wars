import saveUser from "../utils/home/saveUser"
import { validName } from "../utils/contact/validFields"
import { getLocalList } from "../utils/localStorage/localStorage"
import deleteUser from "../utils/home/deleteUser"

export default function homeController() {


  // Abrir modal o cerrar si hay usuario.

  let userExist = getLocalList('user').length !== 0

  if (userExist) {

    let user = getLocalList('user')

    let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido! ${user[0].userName}`)

    let userDelete = $('<button class="btn btn-danger deleteUser">').text('eliminar usuario')
    
    $('.userCol').append(userNode).append(userDelete)

    deleteUser()

  } else {

    $('.modal').modal('show')


    $('#newUser').blur(function () {
      validName($(this))
    }).keyup(function () {
      validName($(this))
    })

    saveUser()
  }

}

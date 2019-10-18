import saveUser from "../utils/home/saveUser"
import { validName } from "../utils/contact/validFields"
import { getLocalList } from "../utils/localStorage/localStorage"
import deleteUser from "../utils/home/deleteUser"
import userNode from "../utils/home/userNode"

export default function homeController() {


  // Abrir modal o cerrar si hay usuario.

  let userExist = getLocalList('user').length !== 0

  if (userExist) {

    let user = getLocalList('user')

    let userObjName = user[0].userName

    userNode(userObjName)

    // let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido! ${user[0].userName}`)
    // let userDelete = $('<button class="btn btn-danger deleteUser">').text('eliminar usuario')
    // $('.userCol').append(userNode).append(userDelete)

  } else {

    $('.modal').modal('show')


    $('#newUser').blur(function () {
      validName($(this))
    }).keyup(function () {
      validName($(this))
    })

    saveUser()

    $('.close').off().one('click', function () {
      let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido, usted no se ha registrado!`)
      let userAdd = $('<button class="btn btn-success openModal">').text('Agregar usuario')
      $('.userCol').append(userNode).append(userAdd)

      $('.openModal').off().click(function () {
        $('.modal').modal('show')
      })
    })



  }

}

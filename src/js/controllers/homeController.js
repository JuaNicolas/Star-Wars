import saveUser from "../utils/home/saveUser"
import { validName } from "../utils/contact/validFields"
import { getLocalList } from "../utils/localStorage/localStorage"
import userNode from "../utils/home/userNode"
import saveChar from "../utils/people/saveChar"

export default function homeController() {


  // Abrir modal o cerrar si hay usuario.

  let userExist = getLocalList('user').length !== 0
  let userCharList = getLocalList('chars').length !== 0

  if (userExist) {

    let user = getLocalList('user')

    let userObjName = user[0].userName

    userNode(userObjName)

  } else if (userCharList) {

    let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido, usted no se ha registrado!`)
    let userAdd = $('<button class="btn btn-success openModal">').text('Agregar usuario')
    $('.userCol').append(userNode).append(userAdd)

    $('.openModal').off().click(function () {
      $('.modal').modal('show')
      $('#newUser').blur(function () {
        validName($(this))
      }).keyup(function () {
        validName($(this))
      })

      saveUser()
    })

  } else {

    $('.modal').modal('show')

    $('.close').off().one('click', function () {
      let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido, usted no se ha registrado!`)
      let userAdd = $('<button class="btn btn-success openModal">').text('Agregar usuario')
      $('.userCol').append(userNode).append(userAdd)

      $('.openModal').off().click(function () {
       
        $('.modal').modal('show')
        $('#newUser').blur(function () {
          validName($(this))
        }).keyup(function () {
          validName($(this))
        })

        saveUser()
      })
    })
  }

}

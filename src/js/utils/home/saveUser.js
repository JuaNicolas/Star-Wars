import { getLocalList, setLocalList } from "../localStorage/localStorage"

export default function saveUser() {

    $('#buttonSend').off().one('click', function () {
        console.log('hola')

        let userName = $('#newUser').val()
        let userObj = { userName }

        let user = getLocalList('user')
        user.push(userObj)
        setLocalList('user', user)

        $('.modal').modal('toggle')


        let userNode = $('<p id="user" class="h1 font-weight-bolder">').text(`Bienvenido! ${user[0].userName}`)

        $('.userCol').append(userNode)
    })

}
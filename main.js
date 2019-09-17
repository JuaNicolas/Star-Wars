/*
!EJERCICIO 1:

Crear una función que valide que el campo nombre no sea vacío cuando el usuario pierde el foco
La función tiene que validar el campo en el cual se dispara el evento y verificar que el valor del mismo no sea vacío. 
En caso de que haya un error tiene que agregar una clase para mostrar el input en rojo, 
en caso contrario una clase para que se muestre en verde.
Video ejemplo


Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase is-valid y mostrar que es invalido agregando la clase is-invalid.

Documentación:

Evento onblur

Add class

Remove class

Boostrap forms
*/

// var inputEmail = document.getElementById('myInputEmail')

// inputEmail.onblur = (event) => {

//   let userEvent = event.target

//   if (userEvent.value) {
//     inputEmail.classList.add('is-valid')
//     inputEmail.classList.remove('is-invalid')
//   } else {
//     inputEmail.classList.add('is-invalid')
//     inputEmail.classList.remove('is-valid')
//   }
// }

/*
!EJERCICIO 2:

Crear una función que valide que un campo contenga un email valido cuando el usuario pierde el foco
La función tiene que validar el campo en el cual se dispara el evento y verificar que el valor del mismo sea un email valido 
(exista, tenga arroba y punto). En caso de que haya un error tiene que agregar una clase para mostrar el input en rojo, en caso 
contrario una clase para que se muestre en verde.
Video ejemplo

Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase is-valid y mostrar que es invalido agregando la clase is-invalid.

Documentación:

Evento onblur

Add class

Remove class

Boostrap forms
*/

var inputEmail = document.getElementById('myInputEmail')

inputEmail.onblur = (e) => {

  var userEventValue = e.target.value

  let validation = userEventValue.indexOf('@') >= 0 && userEventValue.indexOf('.com') >= 0

  if (validation) {
    inputEmail.classList.add('is-valid')
    inputEmail.classList.remove('is-invalid')
    console.log('si')
  } else {
    inputEmail.classList.add('is-invalid')
    inputEmail.classList.remove('is-valid')
    console.log('no')
  }

}


  // if (userEventValue) {
  //   inputEmail.classList.add('is-valid')
  //   inputEmail.classList.remove('is-invalid')
  // } else {
  //   inputEmail.classList.add('is-invalid')
  //   inputEmail.classList.remove('is-valid')
  // }
//}
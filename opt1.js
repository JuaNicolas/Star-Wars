// !Primer ejercicio
// let inputEmail = $('#inputEmail')
// 
// $(document).ready(function () {
//     inputEmail.blur(function () {

//         let inputValue = $(this).val()

//         let isValid = inputValue.indexOf('@') != -1
//             && inputValue.indexOf('.com') != -1

//         if (isValid) {
//             $(this).addClass('is-valid')
//             $(this).removeClass('is-invalid')
//         } else {
//             $(this).addClass('is-invalid')
//             $(this).removeClass('is-valid')
//         }
//     })
// })

// !Segundo ejercicio

// Empezar en cero.
// Si el usuario presiona Enter tiene que empezar de nuevo.
// Sumar uno si el usuario presiona arriba.
// Restar uno si el usuario presiona abajo.

// let init = 0

// $(document).ready(function () {

//     $(document).keydown(function (e) {

//         switch (e.which) {
//             case 40:
//                 init--
//                 $("p").html('Numero: ' + init)
//                 break
//             case 38:
//                 init++
//                 $("p").html('Numero: ' + init)
//                 break
//             case 13:
//                 init = 0
//                 $("p").html('Numero: ' + init)
//                 break
//              default:
//                  break
//         }
//     })
// })

// !Tercer ejercicio

// El formulario deberá contar con los siguientes campos y validarlo la primera vez cuando el usuario pierda el foco, pero a partir de la siguiente validarlo en cada cambio del input usando jQuery para manipular el DOM.

// Nombre: Deberá tener contenido.
// Email: Deberá contener arroba, punto y contenido.
// Comentarios: Deberá tener contenido.
// Si existe algún error deberá mostrar el campo en rojo y un mensaje indicando el tipo de error debajo del input.

// Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.
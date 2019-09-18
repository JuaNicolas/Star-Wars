/*
!Primera parte
DNI tiene que ser un número positivo y ser único (Que no coincida con ninguno ya agregado en la lista).
Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no borra nada.

*/

// Base de Datos de Alumnos para alojar en el Local Storage
// var studentDB = [{
//   name: 'Pedro',
//   surname: 'Paez',
//   dni: 38453829,
//   email: 'PedroPaez@gmail.com'
// }, {
//   name: 'Pedro',
//   surname: 'Paez',
//   dni: 38453829,
//   email: 'PedroPaez@gmail.com'
// }]
var studentDB = []

function convert2JSON() {
  // Convierto JS en JSON
  var stringifiedStudentDB = JSON.stringify(studentDB)
  // Guardo el JSON en el Local Storage
  localStorage.setItem('DATA_BASE', stringifiedStudentDB)
}

function back4JSON() {
  // Levanto la DB
  var parsedStudentDB = localStorage.getItem('DATA_BASE')
  // Convierto el JSON en JS
  parsedStudentDB = JSON.parse(parsedStudentDB)
}


// Función para agregar CSS
function updateClass(isValid, element) {
  if (isValid) {
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
    console.log('si')
    return element.value
  } else {
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')
    console.log('no')
  }
}

// Validación de 'Nombre'
let inputName = document.getElementById('inputName')
inputName.onblur = (e) => {

  let inputName = e.target
  let inputNameValue = e.target.value
  let isValid = typeof inputNameValue === 'string'
    && inputNameValue.length > 1

  updateClass(isValid, inputName)
}

// Validación de 'Apellido'
let inputSurname = document.getElementById('inputSurname')
inputSurname.onblur = (e) => {

  let inputSurname = e.target
  let inputSurnameValue = e.target.value
  let isValid = typeof inputSurnameValue === 'string'
    && inputSurnameValue.length > 1

  updateClass(isValid, inputSurname)
}

// Validación de 'Email'
let inputEmail = document.getElementById('inputEmail')
inputEmail.onblur = (e) => {

  let inputEmail = e.target
  let inputEmailValue = e.target.value
  let isValid = typeof inputEmailValue === 'string'
    && inputEmailValue.length > 1
    && inputEmailValue.indexOf('@') > 4
    && inputEmailValue.indexOf('.com') > 8

  updateClass(isValid, inputEmail)
}

// Validación de 'Dni'
let inputDni = document.getElementById('inputDni')
inputDni.onblur = (e) => {

  // Condiciones para validar:
  let inputDni = e.target
  let inputDniValue = parseInt(e.target.value)
  let isValid = inputDniValue !== NaN
    && inputDniValue !== null
    && inputDniValue > 1000000
    && 100000000 > inputDniValue

  // Confirmar si un alumno esta en la DB con el DNI no se encuentra en la Base de Datos
  studentDB.forEach(student => {
    if (inputDniValue !== student.dni) {
      updateClass(isValid, inputDni)
    }
  })

}

// Agregar alumno a la Base de Datos
let addStudent = document.getElementById('addStudent')
addStudent.onclick = () => {
  let name = inputName.value
  let surname = inputSurname.value
  let dni = parseInt(inputDni.value)
  let email = inputEmail.value

  student = {
    name,
    surname,
    dni,
    email
  }

  // 
  back4JSON()
  studentDB.push(student)
  convert2JSON()
}






/*

Tods los cambios tienen que quedar guardados en el LocalStorage, en el caso de que ya existan alumnos
guardados los tiene que mostrar al inicio del programa.

Deberá mostrar siempre una lista en pantalla con los alumnos cargados en el sistema que tendrá que ser actualizada en cada cambio.

Para deshabilitar el botón hay que poner en true la propiedad disabled en el botón y para habilitarlo hay que cambiarla a false.
Ej: document.getElementById('myButton').disabled = true.

Piezas a utilizar:

HTML -> Desafío clase 01
Función setLocalList -> Ejercicio clase 07
Función getLocalList -> Desafío clase 07
Función createStudentNode -> Desafío clase 08
Documentación:

Listas de Bootstrap

Diagramas provistos en esta misma carpeta mostrando los flujos de AltaEstudiante y BajaEstudiante

*/


/*

!Segunda parte

El formulario deberá también incluir los siguientes campos y validarlos:

Apellido es un campo opcional.
Email es un campo obligatorio y tiene que tener al menos un @ y un ..
Deberá permitir buscar un alumno ingresando un texto encontrando coincidencias parciales en nombre y apellido, sin importar mayúsculas o
minúsculas.

Video ejemplo

Piezas a utilizar:

Función searchStudentIndexByText -> Desafío clase 04
Función includesText -> Desafío clase 06
Función validateEmailField -> Desafío clase 09
Documentación:

Listas de Bootstrap

Diagrama provisto en esta misma carpeta mostrando el flujo BúsquedaEstudiante
*/

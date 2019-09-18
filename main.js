/*

!Primera parte

Deberá tener un formulario que incluya los siguientes campos y los valide, en caso de que alguno no cumpla deberá mostrar un error y
no permitir agregar el alumno hasta que se corrija:

Nombre es un campo obligatorio.
DNI tiene que ser un número positivo y ser único (Que no coincida con ninguno ya agregado en la lista).
Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no borra nada.

 */

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

let inputName = document.getElementById('inputName')
inputName.onblur = (e) => {

  let inputName = e.target
  let inputNameValue = e.target.value
  let isValid = typeof inputNameValue === 'string'
    && inputNameValue.length > 1

  updateClass(isValid, inputName)


  // updateClass(isValid, inputName)
  // if (isValid) {
  //   inputName.classList.add('is-valid')
  //   inputName.classList.remove('is-invalid')
  //   console.log('si')

  // } else {
  //   inputName.classList.add('is-invalid')
  //   inputName.classList.remove('is-valid')
  //   console.log('no')
  // }
}

let inputEmail = document.getElementById('inputEmail')
inputEmail.onblur = (e) => {

  let inputEmail = e.target
  let inputEmailValue = e.target.value
  let isValid = typeof inputEmailValue === 'string'
    && inputEmailValue.length > 1
    && inputEmailValue.indexOf('@') > 4
    && inputEmailValue.indexOf('.com') > 8

  updateClass(isValid, inputEmail)
  // if (isValid) {
  //   inputEmail.classList.add('is-valid')
  //   inputEmail.classList.remove('is-invalid')
  //   console.log('si')

  // } else {
  //   inputEmail.classList.add('is-invalid')
  //   inputEmail.classList.remove('is-valid')
  //   console.log('no')
  // }
}

let inputDni = document.getElementById('inputDni')
inputDni.onblur = (e) => {

  let inputDni = e.target
  let inputDniValue = e.target.value
  parseInt(inputDniValue)
  let isValid = inputDniValue !== NaN
    && inputDniValue !== null
    && inputDniValue > 1000000
    && 100000000 > inputDniValue

  updateClass(isValid, inputDni)
  //   if (isValid) {
  //   inputDni.classList.add('is-valid')
  //   inputDni.classList.remove('is-invalid')
  //   console.log('si')

  // } else {
  //   inputDni.classList.add('is-invalid')
  //   inputDni.classList.remove('is-valid')
  //   console.log('no')
  // }
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

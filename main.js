/**
 *
 * 1° - Que el usuario reciba un feedback cuando sale de foco de un elemento. 
 * 
 * El feedback sera positivo si los datos ingresados son correctos y seran negativos si los datos, en cambio, no siguen 
 * los requerimientos deseados.
 * 
 * Requisitos:
 * 
 *  1- Nombre: debe ser de formato 'string', de más de 2 caracteres y obligatorio.
 * 
 *  2- Apellido: debe ser de formato 'string', de más de 2 caracteres y no obligatorio.
 * 
 *  3- DNI: debe ser un 'number' de caracteristicas validas para la Argentina, ser de 7 u 8 caracteres de largo, además de ser único en la base de datos y obligatorio.
 * 
 *  4- Email: debe ser de formato 'string', contener el signo '@' y un '.com', ser de un mínimo de 14 caracteres y obligatorio.
 * 
*/
const STUDENT_KEY = 'studentList'

// var studentList = [{
//   name: 'Pedro',
//   surname: 'Paez',
//   dni: 87654321,
//   email: 'PedroPaez@gmail.com'
// }, {
//   name: 'Pedro',
//   surname: 'Paez',
//   dni: 12345678,
//   email: 'PedroPaez@gmail.com'
// }]

// var studentList = JSON.stringify(studentList)
// localStorage.setItem(STUDENT_KEY, studentList)

const MIN_DNI = 10000000
const MAX_DNI = 100000000

// Función para dar Feedback positivo o negativo
function confirmInput(_condition, _element) {
  if (_condition) {
    _element.classList.add('is-valid')
    _element.classList.remove('is-invalid')
  } else {
    _element.classList.add('is-invalid')
    _element.classList.remove('is-valid')
  }
}


// Obtencíon y validación de 'Nombre':
let inputName = document.querySelector('#inputName')
inputName.onblur = (_e) => {

  let inputName = _e.target
  let inputNameValue = _e.target.value
  let isValid = typeof inputNameValue === 'string'
    && inputNameValue.length > 1
    && isNaN(inputNameValue)

  // Feedback para el usuario
  confirmInput(isValid, inputName)

  // Habilitar el botón
  enableButton()
}

// Obtención y validación de 'Apellido':
let inputSurname = document.getElementById('inputSurname')
inputSurname.onblur = (_e) => {

  let inputSurname = _e.target
  let inputSurnameValue = _e.target.value

  let isValid = typeof inputSurnameValue === 'string'
    && isNaN(inputSurnameValue)
    || inputSurnameValue.length == 0

  // Feedback para el usuario
  confirmInput(isValid, inputSurname)

  // Habilitar el botón
  enableButton()
}

// Obtención y validación de 'Email':
let inputEmail = document.getElementById('inputEmail')
inputEmail.onblur = (_e) => {

  let inputEmail = _e.target
  let inputEmailValue = _e.target.value
  let isValid = typeof inputEmailValue === 'string'
    && inputEmailValue.indexOf('@') > 1
    && inputEmailValue.indexOf('.com') > 5

  // Feedback para el usuario
  confirmInput(isValid, inputEmail)

  // Habilitar el botón
  enableButton()
}

// Obtención y validación de 'Dni':
let inputDni = document.getElementById('inputDni')
inputDni.onblur = (_e) => {

  // Condiciones para validar:
  let inputDni = _e.target
  let inputDniValue = parseInt(_e.target.value)


  let isValid = inputDniValue != NaN
    && inputDniValue > MIN_DNI
    && MAX_DNI > inputDniValue

  let isUnique = findStudent(inputDniValue)

  let validField = isValid && isUnique

  // Feedback para el usuario
  confirmInput(validField, inputDni)

  // Habilitar el botón
  enableButton()
}


// Busco en la lista de estudiantes el dni ingresado, si lo encuentro devuelvo el objeto estudiante.
findStudent = (_dni) => {
  let studentListString = localStorage.getItem(STUDENT_KEY)

  if (studentListString != null) {
    let studentList = JSON.parse(studentListString)
    for (let student of studentList) {
      if (student.dni == _dni) {
        return false
      }
    }
    return true
  }
  return true
}


/**
 *
 * 2° - Que el usuario agregue el nuevo alumno.
 * 
 * El nuevo alumno debe tener los valores necesarios y válidos para adjuntarse a la base de alumnos. 
 *
 * Requisitos:
 *
 *  1- Que el 'nombre', el 'apellido', el 'email' (opcional) y el 'dni' que el usuario ingrese esten validados y confirmados 
 *
 *  2- Que el botón para agregar el alumno este deshabilitado hasta que los campos sean validos.
 *
*/


enableButton = () => {

  let validName = inputName.classList.contains('is-valid')
  let validSurname = inputSurname.classList.contains('is-valid')
  let validDni = inputDni.classList.contains('is-valid')
  let validEmail = inputEmail.classList.contains('is-valid')
  let isValid = validName
    && validSurname
    && validDni
    && validEmail

  if (isValid) {
    addStudent.disabled = false
  }
}


// Agregar alumno a la Base de Datos
let addStudent = document.getElementById('addStudent')
addStudent.onclick = () => {
  var studentListString = localStorage.getItem(STUDENT_KEY)

  let name = inputName.value
  let surname = inputSurname.value
  let dni = parseInt(inputDni.value)
  let email = inputEmail.value

  let student = {
    name,
    surname,
    dni,
    email
  }

  if (studentListString) {
    studentList = JSON.parse(studentListString)
    studentList.push(student)

  } else {
    studentList = [student]
  }


  var stringifiedList = JSON.stringify(studentList)
  localStorage.setItem(STUDENT_KEY, stringifiedList)
}

/**
 *
 * 3° - Cada alumno en la base de datos o agregado debe mostrarse en la pantalla.
 *
 * El nuevo alumno debe mostrar todos los valores ingresados; nombre, apellido, dni y email.
 *
 * Requisitos:
 *
 *  1- Que sea mostrado en formado de lista, cada alumno es un elemento de la lista.
 *
 *  2- Que mantenga una estética coherente al diseño de la página.
 *
*/



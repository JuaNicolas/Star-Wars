// Base de Datos de Alumnos para alojar en el Local Storage
var studentDB = [{
  name: 'Pedro',
  surname: 'Paez',
  dni: 38453829,
  email: 'PedroPaez@gmail.com'
}, {
  name: 'Pedro',
  surname: 'Paez',
  dni: 38453829,
  email: 'PedroPaez@gmail.com'
}]


// var student7DB = []

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
    return element.value
  } else {
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')
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
  // && isInDB(inputDniValue)

  updateClass(isValid, inputDni)
}

// isInDB = (dni) => {
//   studentDB.forEach(student => {
//     if (dni !== student.dni) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

// Agregar alumno a la Base de Datos
let addStudent = document.getElementById('addStudent')
addStudent.disabled = false
addStudent.onclick = () => {
  let name = inputName.value
  let surname = inputSurname.value
  let dni = parseInt(inputDni.value)
  let email = inputEmail.value

  let validName = inputName.classList.contains('is-valid')
  let validSurname = inputSurname.classList.contains('is-valid')
  let validDni = inputDni.classList.contains('is-valid')
  let validEmail = inputEmail.classList.contains('is-valid')
  let isValid = validName
    && validSurname
    && validDni
    && validEmail
  // && isInDB(name)

  student = {
    name,
    surname,
    dni,
    email
  }

  if (isValid) {
    console.log('es valido')
    back4JSON()
    studentDB.push(student)
    convert2JSON()
  } else {
    addStudent.disabled = true
    console.log('acaaa')
  }
}

window.onload = () => {

  let studentList = document.querySelector('.col ul')
  let studentNode = document.createElement('li')

  dataBase = localStorage.getItem('DATA_BASE')

  for (let index = 0; index < dataBase.length; index++) {
    const element = dataBase[index];

    console.log(element)
    studentNode.innerHTML = 'hola'
    studentList.appendChild(studentNode)
  }
}



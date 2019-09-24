/**
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

/*
! Base de pruebas
var studentList = [{
   name: 'Pedro',
  surname: 'Paez',
  dni: 87654321,
  email: 'PedroPaez@gmail.com'
}, {
  name: 'Pedro',
  surname: 'Paez',
  dni: 12345678,
  email: 'PedroPaez@gmail.com'
}]

var studentList = JSON.stringify(studentList)
localStorage.setItem(STUDENT_KEY, studentList)
*/

const MIN_DNI = 10000000
const MAX_DNI = 100000000

// Función para dar Feedback positivo o negativo
function confirmInput(_condition, _element) {
  if (_condition) {
    _element.classList.add('is-valid')
    _element.classList.remove('is-invalid')
    console.log('feedback positivo')
  } else {
    _element.classList.add('is-invalid')
    _element.classList.remove('is-valid')
    console.log('feedback negativo')
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

  console.log('nombre')
  // Habilitar el botón
  enableButton()
  console.log('nombre salio')
}

// Obtención y validación de 'Apellido':
let inputSurname = document.getElementById('inputSurname')
inputSurname.onblur = (_e) => {

  let inputSurname = _e.target
  let inputSurnameValue = _e.target.value

  let isValid = typeof inputSurnameValue === 'string'
    && isNaN(inputSurnameValue)
    && inputSurnameValue.length > 1
    || inputSurnameValue.length == 0

  // Feedback para el usuario
  confirmInput(isValid, inputSurname)

  console.log('apellido')
  // Habilitar el botón
  enableButton()
  console.log('apellido salio')
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
  console.log('email')
  enableButton()
  console.log('email salio')
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

  let validField = isValid && isDniUnique(inputDniValue)

  // Feedback para el usuario
  confirmInput(validField, inputDni)
  console.log('dni')
  // Habilitar el botón
  enableButton()
  console.log('dni salio')
}


// Busco en la lista de estudiantes el dni ingresado, si lo encuentro devuelvo el objeto estudiante.
function findStudent(_dni) {

  console.log('busco dni')
  let studentListString = localStorage.getItem(STUDENT_KEY)

  if (studentListString != null) {
    let studentList = JSON.parse(studentListString)
    console.log('entro a buscar el estudiante')
    for (let index = 0; index < studentList.length; index++) {
      let student = studentList[index]
      console.log(student)
      if (student.dni === _dni) {
        console.log('encontro el dni')
        console.log({ student, index })
        return {
          student,
          index
        }
      }
    }
    console.log('no encontro la lista')
    return null
  }
}

function isDniUnique(_dni) {

  var studentExist = findStudent(_dni)
  console.log(studentExist)
  if (studentExist) {
    console.log('existe el estudiante')
    return false;
  }
  console.log('no existe el estudiante')
  return true;
}

/**
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

// Habilitar el botón
enableButton = () => {

  console.log('entro a habilitar boton')
  let validName = inputName.classList.contains('is-valid')
  let validSurname = inputSurname.classList.contains('is-valid')
  let validDni = inputDni.classList.contains('is-valid')
  let validEmail = inputEmail.classList.contains('is-valid')
  let isValid = validName
    && validSurname
    && validDni
    && validEmail

  if (isValid) {
    console.log('habilito el boton boton')
    return addStudent.disabled = false
  }
  console.log('el boton sigue deshabilitado')
}


// Agregar alumno a la Base de Datos
let addStudent = document.getElementById('addStudent')
addStudent.onclick = () => {
  var studentListString = localStorage.getItem(STUDENT_KEY)

  console.log(studentListString)
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

  console.log(`creo al estudiante ${student}`)
  if (studentListString) {
    studentList = JSON.parse(studentListString)
    console.log(`es un archivos js ${studentList}`)
    studentList.push(student)
    console.log('si la lista existe, agrega el estudiante ' + studentList)

  } else {
    studentList = [student]
    console.log('si no esta la lista la crea con el nuevo alumno ' + studentList)
  }


  var stringifiedList = JSON.stringify(studentList)
  localStorage.setItem(STUDENT_KEY, stringifiedList)
}

/**
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

// levantar la base de datos para ingresar los nodos

window.onload = () => {

  // Levantar la base de datos
  let studentListString = localStorage.getItem(STUDENT_KEY)
  console.log(studentListString)
  if (studentListString != null) {
    let studentList = JSON.parse(studentListString)
    console.log('Transformo la lista en JS')
    return studentNodes(studentList)
  }
  console.log('No encontro base de datos')
  studentList = []
}

studentNodes = (_dataBase) => {

  console.log('Entra a crear los nodos')

  _dataBase.forEach(student => {

    console.log('Itera en la base de datos alumno por alumno')
    createStudent(student)

  })
}

createStudent = (alumni) => {

  console.log('Entra a crear el alumno')
  studentList = document.querySelector('#studentList')

  studentNode = document.createElement('li')

  studentFullName = document.createElement('p')
  studentFullName.innerHTML = `${alumni.name} ${alumni.surname}`

  studentDNI = document.createElement('p')
  studentDNI.innerHTML = `${alumni.dni}`

  studentEmail = document.createElement('p')
  studentEmail.innerHTML = `${alumni.email}`

  studentList.appendChild(studentNode)
  studentNode.appendChild(studentFullName)
  studentNode.appendChild(studentDNI)
  studentNode.appendChild(studentEmail)

  console.log('Sale de crear el alumno')
}

/**
 * 4° - Se debe poder buscar a un alumno por su nombre:
 * 
 *  1- debe aceptar valores parciales.
 *
*/

// Buscar el alumno por nombre
let searchStudentByName = document.getElementById('search-by-name')
searchStudentByName.onclick = () => {

  let nameToSearch = document.querySelector('#searchByName')
  nameToSearch.target

  //Levanto la base de datos
  let studentListString = localStorage.getItem(STUDENT_KEY)

  if (studentListString != null) {

    let studentList = JSON.parse(studentListString)

    
    for (let index = 0; index < studentList.length; index++) {
      const student = studentList[index]
      
      let lowCaseName = student.name.toLowerCase()
      let lowCaseToFind = nameToSearch.value.toLowerCase()

      if (lowCaseName.indexOf(lowCaseToFind) > -1) {
        console.log('Encontro una coincidencia')

        //Mostrar el alumno si se encuentra
        let foundedShow = document.querySelector('#foundedShow') 
        foundedShow.removeAttribute('hidden')
        
        let studentFoundList = document.querySelector('#studentFound') 
        let studentFound = document.createElement('li')

        studentFound.innerText = `${student.name} ${student.surname} - ${student.dni}`

        studentFoundList.appendChild(studentFound)
      }
    }
  }
}
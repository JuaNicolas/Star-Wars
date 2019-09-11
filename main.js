// !PRIMER EJERCICIO

/*
Crear y agregar nodos en una lista
Usar los métodos y propiedades vistos en clase para crear tres nodos <li> con distintos nombres adentro, 
agregarles a cada uno la clase list-group-item y agregarlos a la lista provista uno por uno.

//<ul id="mainList" class="list-group">
//  <!-- Elementos de la lista -->
//</ul>
//
//Datos de prueba:
//
//var texts = ['Ed', 'Edd', 'Eddy' ]
//Documentación:
//
//List group Bootstrap
//
//CreateElement
//
//AppendChild
*/

// Creo el array primaryCharacters y secondaryCharacters de la serie infantil 'Ed, Edd y Eddy'
var primaryCharacters = ['Ed', 'Edd', 'Eddy']
var secondaryCharacters = ['Rolf', 'Nazz', 'Kevin', 'Jimmy', 'Sarah', 'Johnny', 'Tablon']

// Funcion para crear la primer lista.
function firstList(array) {
    for (let index = 0; index < array.length; index++) {

        // Creo el ul
        let primaryList = document.createElement('ul')

        // Selecciono el ID
        let listOne = document.getElementById('listOne')

        // Creo el li del ul
        let listItemNode = document.createElement('li')

        // Ingreso en el li el contenido del array
        listItemNode.innerHTML = array[index]

        // Agrego al ul el li
        primaryList.appendChild(listItemNode)

        // Agrego al ID el ul creando con anterioridad
        listOne.appendChild(primaryList)
    }

}

// Ejecuta la primer funcion.
firstList(primaryCharacters)

// Funcion para crear la segunda lista.
function secondList(array) {
    for (let index = 0; index < array.length; index++) {

        // Creo el ul
        let secondaryList = document.createElement('ul')

        // Selecciono el ID
        let listTwo = document.getElementById('listTwo')

        // Creo el li del ul
        let listItemNode = document.createElement('li')

        // Ingreso en el li el contenido del array
        listItemNode.innerHTML = array[index]

        // Agrego al ul el li
        secondaryList.appendChild(listItemNode)

        // Agrego al ID el ul creando con anterioridad
        listTwo.appendChild(secondaryList)
    }
}

// Ejecuta la segunda funcion.
secondList(secondaryCharacters)


// *PRUEBAS PRIMARIAS

// for (let index = 0; index < primaryCharacters.length; index++) {

//     let primaryList = document.createElement('ul')
//     let listOne = document.getElementById('listOne')
//     let listItemNode = document.createElement('li')

//     listItemNode.innerHTML = primaryCharacters[index]
//     primaryList.appendChild(listItemNode)
//     listOne.appendChild(primaryList)
// }

// for (let index = 0; index < secondaryCharacters.length; index++) {

//     let secondaryList = document.createElement('ul')
//     let listTwo = document.getElementById('listTwo')
//     let listItemNode = document.createElement('li')

//     listItemNode.innerHTML = secondaryCharacters[index]
//     secondaryList.appendChild(listItemNode)
//     listTwo.appendChild(secondaryList)
// }

// !SEGUNDO EJERCICIO

/*
Crear una función que cree un nodo alumno [Pieza del Workshop I]
Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo <li> con los datos del alumno.
var studentNode = createStudentNode(newStudent)
Resultado ejemplo:

<li class="list-group-item" id="22999333">
  <h1>
    Juan Peréz
  </h1>
  <h3>
    DNI: 22999333
  </h3><p>
    E-mail: juan@gmail.com
  </p>
</li>
Datos de prueba:

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}
Documentación:

List group Bootstrap

CreateElement
*/

// Objeto student
var student = {
    firstName: 'Juan',
    lastName: 'Perez',
    dni: 22456481,
    email: 'juan.perez@gmail.com'
}

// Obtengo el ul con ese ID.
let studentList = document.getElementById('list-group')

// Creo el li.
let studentListItem = document.createElement('li')

// Creo los elementos h1, h3 y p.
let studentListName = document.createElement('h1')
let studentListDNI = document.createElement('h3')
let studentListEmail = document.createElement('p')

// Ingreso los datos correspondientes al object 'student' en los elementos h1, h3 y p.
studentListName.innerHTML = student.firstName + ' ' + student.lastName
studentListDNI.innerHTML = student.dni
studentListEmail.innerHTML = student.email

// Agrego la clase de Bootstrap 4 al li.
// *Forma 1
// studentListItem.classList.add('list-group-item')

// *Forma 2
studentListItem.className = 'list-group-item'

// Agrego al li cada elemento h1, h3 y p.
studentList.appendChild(studentListItem)
studentListItem.appendChild(studentListName)
studentListItem.appendChild(studentListDNI)
studentListItem.appendChild(studentListEmail)

// !DE MÁS
// let studentList = document.getElementById('list-group')
// let studentListItem = document.createElement('li')

// let studentListName = document.createElement('h1')
// let studentListDNI = document.createElement('h3')
// let studentListEmail = document.createElement('p')

// studentListName.innerHTML = student.firstName + student.lastName
// studentListDNI.innerHTML = student.dni
// studentListEmail.innerHTML = student.email

// studentList.classList.add('list-group')
// studentListItem.classList.add('list-group-item')


// studentList.appendChild(studentListItem)
// studentListItem.appendChild(studentListName)
// studentListItem.appendChild(studentListDNI)
// studentListItem.appendChild(studentListEmail)




// // Recorro el Objeto student
// for (var key in student) {

//     // Obtengo el elemento con el ID.
//     let studentList = document.getElementById('list-group')

//     // Creo un li.
//     let studentListItem = document.createElement('li')

//     // Agrego estilos de Bootstrap 4 al ul y al li.
//     studentList.classList.add('list-group')
//     studentListItem.classList.add('list-group-item')

//     // Cada recorrido toma la .value del objeto.
//     var studentValue = student[key]

//     // Ingreso en el li el value
//     studentListItem.innerHTML = studentValue

//     // Adjunto al ul el li
//     studentList.appendChild(studentListItem)
// }


/*
Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido,
si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario -1.
La función solo encuentra coincidencias exactas, por ejemplo encuentra Fernandez, pero no Fer o fernandez.
Probar que funcione correctamente.
*/

var studentsList = [
    {
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956
    },
    {
        firstName: 'Pablo',
        lastName: 'Picapiedras',
        dni: 45678983
    }
]

var student = prompt('Ingrese un nombre o apellido de un estudiante para buscar: ')
const MSG_1 = 'Se encontro al alumno en la posicion: '
const MSG_ERROR = 'El alumno no se encontro.'
var sentinel = 0

for (var index = 0; index < studentsList.length; index++) {
    var studentName = studentsList[index].firstName
    var studentLastName = studentsList[index].lastName
    sentinel++
    if (student == studentName || student == studentLastName) {
        console.log(MSG_1 + index)
        break
    } else if (sentinel == studentsList.length) {
        console.log(MSG_ERROR)
        break
    }
}
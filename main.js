/*
Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido,
si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario -1.
La función solo encuentra coincidencias exactas, por ejemplo encuentra Fernandez, pero no Fer o fernandez.
Probar que funcione correctamente.
*/

// var studentsList = [
//     {
//         firstName: 'Juan',
//         lastName: 'Pérez',
//         dni: 45678987
//     },
//     {
//         firstName: 'Ana',
//         lastName: 'Fernandez',
//         dni: 45678989
//     },
//     {
//         firstName: 'Pedro',
//         lastName: 'Mármol',
//         dni: 45678956
//     },
//     {
//         firstName: 'Pablo',
//         lastName: 'Picapiedras',
//         dni: 45678983
//     }
// ]

// var student = prompt('Ingrese un nombre o apellido de un estudiante para buscar: ')
// const MSG_1 = 'Se encontro al alumno en la posicion: '
// const MSG_ERROR = 'El alumno no se encontro.'
// var sentinel = 0

// for (var index = 0; index < studentsList.length; index++) {
//     var studentName = studentsList[index].firstName
//     var studentLastName = studentsList[index].lastName
//     sentinel++
//     if (student == studentName || student == studentLastName) {
//         console.log(MSG_1 + index)
//         break
//     } else if (sentinel == studentsList.length) {
//         console.log(MSG_ERROR)
//         break
//     }
// }


/*
Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos los números.
*/

/*
average(examResults)
function average(array) {
    let count = 0
    for (let index = 0; index < array.length; index++) {
        var element = array[index]
        count += element
        // console.log(count + 'x')
    }

    let total = count / array.length
    // console.log(total)
    console.log('El promedio es: ' + total)
}

average(examResults)
*/

var examResults = [7, 5, 6, 4, 3, 2, 8]

// i+1

function average2(array) {
    let examResults2 = []
    let count = 0
    let sentinel = 1
    do {
        for (let index = 0; index < array.length; index++) {
            var element = array[index]
            count += element * array[sentinel]
            console.log(sentinel)
            console.log(count + 'x')
            sentinel++
        }
    } while (sentinel > array.length);

    let total = count / array.length
    console.log(total)
    return console.log('El promedio es: ' + total)
}

average2(examResults)

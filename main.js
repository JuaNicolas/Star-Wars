/* 
La función deberá recibir como parámetro un indice y como segundo parámetro un Array 
y devolver una copia del mismo pero con el elemento que esta en el indice eliminado.

var numbers = [1,2,3,4,5,6,7,8,9,10]

deleteElement(2, numbers) 

Documentación:

Array.isArray
splice
slice
*/
/*
// Funcion para sacar un elemento, mostrar el elemento sacado e insertarlo nuevamente.
function deleteElement(i, array) {
    // Saca el elemento.
    let newArray = array.splice(i, 1)
    // Muestra el elemento sacado.
    console.log(newArray)
    // Inserta nuevamente el elemento al array.
    array.splice(i++, 0, i)
    // Muestra el array completo.
    console.log(array)

}

// Elemento a sacar/agregar.
var i = parseInt(prompt('Ingrese un indice: '))
// Array a modificar.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Llamada a la funcion.
deleteElement(i, numbers)

*/
/*
Crear una función que reciba como parámetros dos string y devuelva 
true en caso de encontrar una coincidencia parcial y 
false en caso contrario, 
la función no tiene que distinguir mayúsculas de minúsculas. 
El primer parámetro pasado a la función es el que se va a tratar de encontrarse dentro del segundo, 
si alguno de los parámetros no es un string también deberá devolver false.

includesText('Pa', 'Patricia') // Deberá devolver true
includesText('Patricia', 'Pa') // Deberá devolver false
includesText(2, 'Pa') // Deberá devolver false

Hint: Se deberán pasar los parámetros recibidos a mayúsculas y luego hacer la comparación mediante indexOf para poder encontrar
coincidencias parciales sin importar mayúsculas y minúsculas.
*/

// Pido primero el parametro y luego la palabra donde evaluare el primero.
var msg1 = prompt('Ingrese un parametro a encontrar: ')
var msg2 = prompt('Ingrese una palabra: ')

// Funcion para encontrar en la palabra el parametro
function includesText(m1, m2) {

    // Paso a mayusculas el parametro y la palabra ingresada
    var upper1 = m1.toUpperCase()
    var upper2 = m2.toUpperCase()

    // Compruebo 
    var indexOfSecond = upper2.indexOf(upper1)

    // Debugger
    // console.log(indexOfSecond)

    // Condiciones de resultado True or False
    if (indexOfSecond >= 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// Inicio la funcion
includesText(msg1, msg2)

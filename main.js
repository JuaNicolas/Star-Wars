/*
Pedir al usuario mediante prompt que ingrese su género y luego su edad. 
Luego mostrar un mensaje en consola que diga Sr., Sra. o Sx.según corresponda
y que también evalue si es mayor de edad o no al momento de construir el mensaje.
Por ejemplo si el usuario ingresa male y 16, el mensaje debería ser Sr. 
usted es menor de edad no puede ingresar, si ingresa female y 34 el mensaje sería Sra. 
usted es mayor de edad puede ingresar.

prompt
console.log
if
*/



// if (age >= ageAdult) {
//     if (gender === 'masculino') {
//         console.log('Hola Señor, usted es mayor de edad y puede ingresar.')
//     } else if (gender === 'femenino') {
//         console.log('Hola Señora, usted es mayor de edad y puede ingresar.')
//     }
//     else {
//         console.log('Hola Sx, usted es mayor de edad y puede ingresar.')
//     }
// } else {
//     if (gender === 'masculino') {
//         console.log('Hola Señor, usted es menor de edad y no puede ingresar.')
//     } else if (gender === 'femenino') {
//         console.log('Hola Señora, usted es menor de edad y no puede ingresar.')
//     }
//     else {
//         console.log('Hola Sx, usted es menor de edad y no puede ingresar.')
//     }
// }

var gender = prompt('Ingrese su genero [masculino, femenino u otros]')
var age = prompt('Por favor, ingrese su edad.')
var ageAdult = 18
var male = 'masculino'
var female = 'femenino'
var others = 'otros'
var isAdult = age >= ageAdult
var notAdult = age < ageAdult
if (isAdult && male || female || others)) {
    if (male) {
        console.log('Hola Señor, usted es mayor de edad y puede ingresar.')
    } else if (female) {
        console.log('Hola Señora, usted es mayor de edad y puede ingresar.')
    } else {
        console.log('Hola, usted es mayor de edad.')
    }
} else if (notAdult && male || female || others) {
    if (gender === 'masculino') {
        console.log('Hola Señor, usted no es mayor de edad y puede ingresar.')
    } else if (gender === 'femenino') {
        console.log('Hola Señora, usted no es mayor de edad y puede ingresar.')
    }
    else {
        console.log('Hola, usted no es mayor de edad.')
    }
} else {
    console.log('Datos no validos.')
}
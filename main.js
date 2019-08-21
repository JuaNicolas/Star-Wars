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

var gender = prompt('Ingrese su genero [masculino, femenino u otros]')
var age = prompt('Por favor, ingrese su edad.')
var ageInt = parseInt(age)
const ageAdult = 18
var isMale = gender === 'masculino'
var isFemale = gender === 'femenino'
var isOthers = gender === 'otros'
var isAdult = ageInt >= ageAdult
var notAdult = ageInt < ageAdult
var msgWelcome = 'Hola '
var msgSir = 'Señor,'
var msgMadam = 'Señora'
var msgOthers = ','
var msgAdult = ' usted es mayor de edad y puede ingresar.'
var msgNotAdult = ' usted no es mayor de edad y no puede ingresar.'

if (isAdult) {
    if (isMale) {
        console.log(msgWelcome + msgSir + msgAdult)
        // console.log('1')
    } else if (isFemale) {
        console.log(msgWelcome + msgMadam + msgAdult)
        // console.log('2')
    } else if (isOthers) {
        console.log(msgWelcome + msgOthers + msgAdult)
        // console.log('3')
    }
} else if (notAdult) {
    if (isMale) {
        console.log(msgWelcome + msgSir + msgNotAdult)
        // console.log('4')
    } else if (isFemale) {
        console.log(msgWelcome + msgMadam + msgNotAdult)
        // console.log('5')
    }
    else if (isOthers) {
        console.log(msgWelcome + msgOthers + msgNotAdult)
        // console.log('6')
    }
} else {
    console.log('Datos no validos. Ingrese nuevamente')
}

/*
Crear una función que permita crear un objeto Student mediante el constructor new, 
el objeto deberá tener las siguientes propiedades:
Publicas:
    firstName
    lastName
    dni
    email
Privadas:
    id generada automáticamente al crear el objeto.

El objeto deberá tener las siguientes métodos:
Públicos:
getId deberá devolver el id del objeto
getFullName deberá devolver un String con el nombre completo del objeto, salvando los casos donde el firstName o lastName sea undefined.

Crear tres alumnos usando los datos de prueba y probar sus métodos.

Datos de prueba:

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

Existe una función que devuelve un número random que nos puede servir para hacer un id único.

var randomNumber = Math.random() // Esto devuelve un número del estilo 0.11296860298890499

Documentación:

Math random
new
*/

function Student(_firstName, _lastName, _dni, _email) {
    var id = Math.random() * 100     

    this.firstName = _firstName
    this.lastName = _lastName
    this.dni = _dni
    this.email = _email

    this.getId = function () {
        return console.log(id)
    }

    this.getFullName = function (firstName, lastName) {
        if (this.firstName === undefined || this.lastName === undefined) {
            return
        }
        return console.log(this.firstName, this.lastName)
    }
}

var students = [
    {
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987,
        email: 'juan@gmail.com'
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989,
        email: 'ana@gmail.com'
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956,
        email: 'pedro@gmail.com'
    }
]

var student1 = new Student('Juan', 'Perez', '45678987', 'juan@gmail.com')
var student2 = new Student('Ana', 'Fernandez', '45678987', 'ana@gmail.com')
var student3 = new Student('Pedro', 'Marmol', '45678987', 'pedro@gmail.com')
var student4 = new Student('Pedro')
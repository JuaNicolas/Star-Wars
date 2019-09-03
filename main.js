/*

*SessionStorage:

El sessionStorage es un objeto global que tiene el navegador y que nos va a permitir persistir información
durante la sesión que el usuario tenga en la página. La sesión va a durar hasta que el usuario cierre la pestaña o el navegador,
cuando lo haga eso va a borrar la información guardada en este objeto. 
El espacio de almacenamiento es de aproximadamente 2.5 MB a 5 MB depende del navegador que estemos usando y actualmente esta 
ampliamente soportado. Este objeto suele ser un buen reemplazo de la Cookies para algunos de sus casos de uso, como también para 
almacenar datos como el Token de acceso o configuraciones del usuario. Al igual que un objeto la forma de ordenar los datos es 
con un par key: value, solo que en este caso el value se guarda siempre en formato string.

*LocalStorage

El localStorage es un objeto global que tiene el navegador con las mismas características que tiene el SessionStorage, 
la única diferencia es que su tiempo de duración es ilimitado por lo cual la información se mantiene guardada aun cuando se cierre 
el navegador o la pestaña.

*/

// Methods

/*
*SetItem
El método setItem(key, value) recibe como parámetro una key y un valor y como resultado guarda el valor en la key 
pasada como parámetro, si ya existe un valor lo pisa.

*GetItem
El método getItem(key) recibe como parámetro una key y devuelve el valor almacenado en esa key, 
en caso de que no exista devuelve null

*RemoveItem
El método removeItem(key) recibe como parámetro una key y elimina el valor almacenado en esa así como la key.

*JSON.stringify
Este método nos va a permitir convertir objetos de JavaScript a JSON, para de esta manera poder guardarlos en el 
LocalStorage o enviarlos a través de una llamada HTTP a una API. El método recibe como parámetro un objeto de JavaScript y 
devuelve un JSON en formato string.

*JSON.parse
Este método nos va a permitir convertir JSON a objetos de JavaScript, al hacer el proceso inverso del JSON.stringify()
nos permite poder volver a usar en nuestro código el elemento. Esto lo vamos a utilizar tanto para recuperar los datos del 
LocalStorage como para recibir información de un API.

*/

// Exercises

/*
Crear una función que permita guardar un Array en el localStorage
La función tiene que recibir como parámetros una key y un Array y convertir el Array en JSON para guardarlo en el localStorge. 
La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni guardar nada.
Datos de prueba:

var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

setLocalList('studentsList', testList) // Guarda la lista en el localStorage en formato JSON
Documentación:

*/


// Array de prueba.
var testArray = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'PEDRO']

// Funcion para verificar que el parametro pasado es un Array para luego integrarlo al localStorage.
function setLocalList(_array, _keyValue) {

    // Verifico si el parametro es un Array.
    if (Array.isArray(_array) && typeof _keyValue === 'string') {

        // Transformo el Array en un JSON.
        let isJSON = JSON.stringify(_array)

        // Integro al localStorage el JSON.
        localStorage.setItem(_keyValue, isJSON);
    }

    // Devuelvo false si los datos son erroneos.
    return false
}

// Inicializo la funcion.
setLocalList(testArray, 'studentList')


/*
Crea una función que permita levantar una lista del localStorage
La función tiene que recibir como parámetro una key y buscar en el localStorage por esa key devolviendo un objeto de JavaScript, 
si no existe el elemento debe devolver un Array vacío. La función tiene que validar los parámetros que recibe, en caso de que alguno sea 
incorrecto no debe romper ni borrar nada.

var studentsList = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
JSON.parse

localStorage
*/

// Funcion para verificar que el parametro es un JSON, si lo es, transformarlo en JS.
function getLocalList(_keyValue) {

    // Se extrae el posible JSON y se coloca en una variable local.
    let jsonArray = localStorage.getItem(_keyValue)

    // Compruebo si el parametro es un JSON.
    if (JSON.parse(jsonArray)) {

        // Retorno el Array
        return jsonArray
    }

    // Retorno un Array vacio si jsonArray no era un JSON valido.
    return jsonArray = []
}

getLocalList('studentList')
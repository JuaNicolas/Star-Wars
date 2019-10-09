// Realizar una aplicación Front End de Star Wars
// Se deberá realizar todo el Front End para mostrar datos de Star Wars, la aplicación deberá contar con las siguientes secciones y cumplir en cada caso con las funcionalidades:

// Principal:
// Cargarse al inicio y al tocar el link a home.
// (Es una pantalla de carga con el logo de Star Wars)

// Personajes:
// Buscar los personajes en la API y mostrarlos en pantalla en una tabla, la carga de personajes tiene que hacerse mediante paginación. (deshabilitar el botón llegado al final)
// Traducir el género, el color de ojos, mostrar la altura en cm, el peso en kg y en cada fila el número de orden en que se cargo el personaje.
// Deberá tener un botón que al presionarlo guarde el personaje en el localStorage si este no existe y lo saque de la tabla.

// Guardados:
// Mostrar los personajes que están almacenados en el localStorage.
// Traducir los mismos campos que la tabla de personajes.
// Deberá tener un botón que al presionarlo elimine el personaje en el localStorage y lo borre de la tabla.

// Contacto:
// Deberá tener un formulario que valide que ninguno de los campos estén vacíos y que el campo mail cumpla con el formato mínimo (un @ y un .). La validación tiene que hacerse al perder foco y luego dinámicamente en cada cambio.
// Se deberán aplicar los conceptos de SPA, MVC y Module Pattern para organizar el proyecto.

// Versión extendida
// Filtrar los por los datos que ya están guardados en el localStorage para no mostrarlos en la tabla de personajes.

// Usar el input de la barra de navegación comentado para cargar resultados de la búsqueda en una tabla en el contenedor principal al igual que el resto de las páginas.

// Documentación

// SWAPI

// Consideraciones

// En la carpeta Recursos se encuentran algunos de los archivos necesarios para realizar el proyecto.



// $(document).ready(function () {


//   // var request = $.ajax({
//   //     url: "https://swapi.co/api/people/",
//   //     method: "GET"
//   // })

//   // request.done(function (data) {
//   //     console.log('Respuesta: ', data)
//   //     $.ajax({
//   //         url: data.next,
//   //         method: "GET"
//   //     })
//   // })

//   // request.fail(function (error) {
//   //     console.log('Error: ', error)
//   // })

//   // function getData(url, cbk) {
//   //     $.ajax(url)
//   //         .done(function (data) {
//   //             cbk(null, data)
//   //         })
//   //         .fail(function (error) {
//   //             cbk(error)
//   //         })
//   // }

//   // function cbk(error, data) {
//   //     if (error) {
//   //         console.log(error)
//   //     }
//   //     console.log(data)
//   //     for (const key in data) {
//   //         const element = data[key];
//   //         console.log(element)
//   //     }
//   // }

//   // getData("https://swapi.co/api/people/5/", cbk)

//   function getData(url, getNext) {
//     $.ajax(url)
//       .done(function (data) {
//         getNext(data, showChars)
//       })
//       .fail(function (error) {
//         console.log(error)
//       })
//   }

//   function getNext(data, showChars) {
//     if (data.results) {
//       showChars(data.results)
//       getData(data.next, getNext)
//     }
//   }

//   function showChars(data) {
//     let tableBody = $('#tableBody')



//     for (let index = 0; index < data.length; index++) {
//       const element = data[index];

//       let char = $('<tr/>')
//       let charId = $('<td>').text(`${index}`)
//       let charName = $('<td>').text(`${element.name}`)
//       let charGender = $('<td>').text(`${element.gender}`)
//       let charHeight = $('<td>').text(`${element.height} cm`)
//       let charMass = $('<td>').text(`${element.mass} kg`)
//       let charEyes = $('<td>').text(`${element.eye_color}`)
//       let charDelete = $('<td>').append($('<button>').text('Eliminar').addClass('btn btn-danger').attr('type', 'button'))

//       // <td style="padding:0"><button id="myButton" type="button" class="btn btn-danger">Eliminar</button></td>


//       char.append(charId)
//         .append(charName)
//         .append(charGender)
//         .append(charHeight)
//         .append(charMass)
//         .append(charEyes)
//         .append(charDelete)
//       tableBody.append(char)
//     }
//   }

//   // getData("https://swapi.co/api/people/", getNext)




// })
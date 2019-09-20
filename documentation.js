/*

*Eventos como atributos
Para suscribirnos a un evento podemos usar un atributo en nuestro tag HTML con el nombre del manejador del evento y asignarle una función 
para ejecutar.

< input type = "button" onclick = "showMessage()" />
  function showMessage() {
    console.log('El usuario hizo click')
  }

  En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario hizo click'.

Si queremos que el mismo elemento se suscriba a más de un evento simplemente agregamos otro atributo para manejar ese nuevo evento 
en nuestro tag HTML y le asignamos otra función para ejecutar.

< input type = "button" class="btn-primary" onclick = "showMessage()" onblur = "showBlurMessage()" />
  function showMessage() {
    console.log('El usuario hizo click')
  }

function showBlurMessage() {
  console.log('El usuario perdió el foco')
}
En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario hizo click' y al perder el foco 
un mensaje que diga 'El usuario perdió el foco'.

La desventaja de esta forma es que suele ensuciar nuestro HTML si queremos suscribir nuestro botón a varios eventos porque cada uno es 
un atributo más, si encima a esto le agregamos que los elementos tienen sus propios atributos como clases o estilos el asunto empeora.
Por este motivo a lo largo del curso vamos a utilizar la forma semántica.

*/

/*

*Eventos semánticos
Para suscribirse a un evento de forma semántica vamos a buscar nuestro elemento con alguno de los métodos de document y le vamos a 
asignar al atributo encargado de manejar el evento la función que queremos que ejecute.

<input type="button" id="button" />
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}
En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario hizo click''.

Si queremos registrar más de un evento simplemente le vamos asignando nuevas funciones a los manejadores de eventos que correspondan.

<input type="button" id="button" />
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}

button.onmouseover = showMessageOver

function showMessageOver(){
  console.log('El usuario paso el mouse sobre el botón')
}
En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario hizo click' y al pasar el mouse por 
encima un mensaje que diga 'El usuario paso el mouse sobre el botón'.

En este caso el HTML se mantiene limpio porque solo es necesario el id en el HTML no importa cuantos manejadores de eventos le agreguemos al 
mismo elemento. Esto mantiene nuestro código más limpio y ordenado

*/

/*

*Evento click
El evento click puede ser escuchado usando el manejador (on-event handler), asignando le una función a la propiedad onclick del nodo del DOM. 
Esta función se va a ejecutar cuando el usuario haga click sobre ese elemento. Este evento suele ser muy usado sobre botones para permitirle 
al usuario tomar acciones.

<input type="button" id="button" />
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(){
  console.log('El usuario hizo click')
}
En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario hizo click'.

En todos los eventos se recibe un objeto event como primer parámetro que contiene propiedades que identifican que elemento fue el que recibió 
el click del usuario.

<input type="button" id="button" />
var button = document.getElementById('button')

button.onclick = showMessage

function showMessage(event){
  var inputNode =  event.target

  console.log('El usuario hizo click en el elmento con id ' + inputNode.id)
}
En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario hizo click en el elmento con id button'.

*/

/*

*Evento blur
El evento blur puede ser escuchado usando el manejador (on-event handler), asignando le una función a la propiedad onblur del nodo del DOM. 
Esta función se va a ejecutar cuando el usuario haga pierda el foco sobre ese elemento. Este suele ser un evento muy usado para validar 
formularios.

<input type="text" id="input-text" />
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(){
  console.log('El usuario perdió foco')
}
En este código al perder el foco en el input se va a mostrar un mensaje en consola que diga 'El usuario perdió foco'.

En todos los eventos se recibe un objeto event como primer parámetro que contiene propiedades que identifican que elemento fue disparó el 
evento de perdida de foco. En este caso nos va a servir para levantar el valor del input en el momento que se perdió el foco.

<input type="text" id="input-text" />
var inputText = document.getElementById('input-text')

inputText.onblur = showMessage

function showMessage(event){
  var inputNode =  event.target

  console.log('El usuario perdió foco y el input tiene el valor ' + inputNode.value)
}
En este código al hacer click en el botón se va a mostrar un mensaje en consola que diga 'El usuario perdió foco y el input tiene el 
valor <valor de input en ese momento>'.

*/
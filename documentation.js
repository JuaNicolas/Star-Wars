/*

*Acceso a los nodos

Existen varios métodos para acceder a los nodos que utilizan distintas formas de identificarlos puede ser
a través del Id, de la clase, del nombre de la etiqueta, etc. 
Por lo cual con sabiendo alguno de esos datos de nuestro elemento HTML vamos a poder acceder a ese nodo 
y manipularlo para poder mostrar en pantalla datos dinámicos creados en JavaScript.

*/

/*

*Acceso a los nodos por Id

El método que vamos a emplear para acceder a un nodo sabiendo su Id es getElementById(), 
este método recibe como parámetro un Id en formato string y devuelve como resultado un solo nodo, 
porque el Id debería ser único en toda la página.
Supongamos nuestra página con el siguiente HTML

<h1 id="main-title"></h1>
var titleNode = document.getElementById('main-title')

titleNode.innerHTML = 'Al fin voy a ver algo en mi página'
Este código lo que va a hacer es buscar en la página el elemento HTML con el Id main-title, 
luego voy a guardarlo en la variable titleNode y le voy a pedir mediante la propiedad innerHTML 
que el contenido del nodo sea el string 'Al fin voy a ver algo en mi página'. 
De esta manera el resultado en nuestra pagina es que el elemento de mi página queda así -> <h1 id="main-title">
Al fin voy a ver algo en mi página</h1> logrando mostrarle al usuario un mensaje en el HTML pero empleando código JavaScript para lograrlo.
*/

/*

*Acceso a los nodos por clase

El método que vamos a emplear para acceder a un nodo sabiendo su clase es getElementsByClassName(), 
este método recibe como parámetro una clase en formato string y devuelve como resultado array de nodos, 
porque pueden existir varios nodos con la misma clase.
Supongamos nuestra página con el siguiente HTML

<p class="paragraph"></p>
<p class="paragraph"></p>
<p class="paragraph"></p>
var paragraphsNodes = document.getElementsByClassName('paragraph')

paragraphsNodes[0].innerHTML = 'Soy el párrafo numero uno'
paragraphsNodes[1].innerHTML = 'Soy el párrafo numero dos'
paragraphsNodes[2].innerHTML = 'Soy el párrafo numero tres'

Este código lo que va a hacer es buscar en la página todos los elementos HTML con la clase paragraph, luego voy a guardarlos en la variable paragraphsNodes y le voy a pedir mediante la propiedad innerHTML que el contenido del elemento cero del Array sea el string 'Soy el párrafo numero uno', luego voy a hacer lo mismo con el elemento uno del Array pero pasando le el string 'Soy el párrafo numero dos' y por último con el elemento dos del Array y el string 'Soy el párrafo numero tres'. De esta manera los elementos <p> de nuestra página quedan así:

<p class="paragraph">Soy el párrafo numero uno</p>
<p class="paragraph">Soy el párrafo numero dos</p>
<p class="paragraph">Soy el párrafo numero tres</p>
*/

/*

*Crear y eliminar nodos

Para poder agregar o eliminar elementos de nuestro HTML existen distintos métodos o propiedades que podemos utilizar, 
nosotros vamos a ver algunos a continuación.

Crear un elemento o etiqueta html
Con el método createElement() vamos a poder crear etiquetas de html, este método recibe como parámetro el nombre de la etiqueta en formato 
string y devuelve como resultado el nodo.

var paragraphNode = document.createElement('p')

El método recibe como parámetro el nombre de la etiqueta que queremos crear (no se incluyen los menor < y mayor > de apretura de la etiqueta), 
y nos devuelve el nodo ya creado para que luego lo podamos modificar o agregar directamente al DOM. Un dato importante es que si no lo agregamos 
al documento nunca lo vamos a ver en pantalla.

Cambiar el contenido de un elemento
La propiedad innerHTML nos permite cambiar el contenido de un nodo asignandole un string, esto pisa o elimina cualquier otro elemento dentro del nodo.
var paragraphNode = document.createElement('div')

paragraphNode.innerHTML = '<p>Soy un párrafo</p>'

Primero creamos un nodo de etiqueta <div> con el método createElement y luego cambiamos su contenido al modificar la propiedad innerHTML y 
asignarle el <p>Soy un párrafo</p>, esto nos va dar como resultado un nodo con una etiqueta div, que adentro va a tener una etiqueta p con 
el texto 'Soy un párrafo'. Quería algo así:

<div>
  <p>Soy un párrafo</p>
</div>

*Agregar un nodo dentro de otro

El método appendChild() nos va a permitir agrega un nodo dentro de otro, recibe como parámetro un nodo y lo agrega dentro del elemento que 
llamo el método. Este método es muy útil para cuando queremos agregar elementos uno por uno, el caso típico es una lista que proviene de 
un Array de javaScript.

var list = ['Elemento 1','Elemento 2','Elemento 3']

var listNode = document.createElement('ul')

var listItemNode

for(var i = 0; i < list.length; i++){
  listItemNode = document.createElement('li')

  listItemNode.innerHTML = list[i]

  listNode.appendChild(listItemNode)
}

En este caso creo primero el nodo ul que va a contener a todos los elmentos de la lista y luego itero el Array list 
para crear un nuevo nodo li y agregarlo al lu en cada pasada del for. Esto daría como resultado lo siguiente:

<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>


*Acceder al nodo padre

Con la propiedad parentNode vamos a poder acceder al nodo padre de un nodo.
<div>
  <p id="paragraph">Soy un párrafo</p>
</div>

var paragraph = document.getElementById('paragraph')

paragraph.parentNode.innerHTML = '<h1>Soy un título</h1>'

Al usar la propiedad parentNode accedo al nodo div pudiendo cambiar el contenido del mismo y reemplazarlo por el string <h1>Soy un título</h1>. 

*Esto genera como resultado que el HTML quede:

<div>
  <h1>Soy un título</h1>
</div>

*Remover un elemento hijo

El método removeChild() nos permite eliminar un nodo que sea hijo de otro, el método recibe como parámetro el nodo que queremos eliminar. 
En combinación con el parentNode nos permite eliminar el mismo elemento que seleccionamos previamente.

<div>
  <p id="paragraph">Soy un párrafo</p>
</div>
var paragraph = document.getElementById('paragraph')

paragraph.parentNode.removeChild(paragraph)

Al utilizar este método en combinación con la propiedad parentNode podemos eliminar el elemento en cuestión dejando como resultado el <div></div> vacío.
*/

/*
*Propiedades de los nodos

Los nodos tiene propiedades o atributos (los mismo atributos de HTML) que pueden tanto devolver un valor como modificarse. 
Esto se puede hacer accediendo a la propiedad correspondiente de los nodos así como modificando esa propiedad. 
Los atributos o propiedades disponibles van a depender del tipo de elemento HTML que estemos manipulando.

<h1 id="title"></h1>
var id = document.getElementById('title').id

console.log(id) // Muestra en consola el string title

document.getElementById('title').id = 'pato'

En el código vemos tanto como acceder al valor de la propiedad Id, así como modificarlo. El resultado final es que el HTML queda asi -> 
<h1 id="pato"></h1>

<li id="list-item"></li>
document.getElementById('text-input').className = 'list-group-item'

En el código vemos como asigna la clase list-group-item el nodo <li>, esta clase se va agregar a otras que se encuentren en el nodo. 
El elemento quedaría así -> <li id="list-item" class="list-group-item"></li>

<input type="text" id="text-input">
var value = document.getElementById('text-input').value

console.log(value) // Muestra en consola el valor que haya ingresado el usuario en el  input

document.getElementById('text-input').value = ''

En el código vemos tanto como acceder al valor de la propiedad value de un input que es el valor que el usuario haya ingresado en el campo. 
Depsués en la siguiente línea lo que hacemos es asignarle el string vacío para borrar lo que estuviera en el input.
*/
//Dicho de manera simple, un nodo es una etiqueta HTML sobre la que vamos a poder realizar operaciones de lectura y de escritura.
/*¿Qué es nodos en Javascript?
Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el 
mismo body o incluso las etiquetas de una lista. Con Javascript podemos 
modificar estas etiquetas con el uso de eventos */
const cajas = [];
// Creando Nodos
var caja = document.createElement('div');// 1-Creamos el Elemento y lo guardamos en una variable


//var contenido = document.createTextNode('Contenido Agregado');//2-Creamos un nodo de texto osea un contenido y lo guardamos en una variable
var contenido = document.createTextNode(`<ul>${cajas[0]}</ul>`);

caja.appendChild(contenido);//3- añadimos el nodo de texto al elemento


caja.setAttribute('class', 'caja naranja');//4 - agregamos atributos a la caja 
//caja.setAttribute('id', '') se podria agregar mas atributos en esta linea por ejemplo. *Se puede hacer de otra forma tambien..


//5 - Agregamos el elemento creado al → documento html 
var contenedor = document.getElementById('id-contenedor'); //obtenemos el id del contenedor en el html y lo guardamos en una variable
contenedor.appendChild(caja); /*a la variable con la id dentro le decimos que la caja que creamos va estar dentro del contenedor como un hijo. 
                                se ubica al final de los hijos si es que habia*/




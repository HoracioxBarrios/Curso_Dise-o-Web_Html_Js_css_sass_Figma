
// Creando Nodos
var caja = document.createElement('div');// 1-Creamos el Elemento y lo guardamos en una variable


var contenido = document.createTextNode('Contenido Agregado');//2-Creamos un nodo de texto osea un contenido y lo guardamos en una variable


caja.appendChild(contenido);//3- añadimos el nodo de texto al elemento 


caja.setAttribute('class', 'caja naranja');//4 - agregamos atributos a la caja 
//caja.setAttribute('id', '') se podria agregar mas atributos en esta linea por ejemplo. *Se puede hacer de otra forma tambien..


//5 - Agregamos el elemento creado al → documento html 
var contenedor = document.getElementById('id-contenedor'); //obtenemos el id del contenedor en el html y lo guardamos en una variable
contenedor.appendChild(caja); /*a la variable con la id dentro le decimos que la caja que creamos va estar dentro del contenedor como un hijo. 
    se ubica al final de los hijos si es que habia*/


//##################       #####################
// contenido de este video a partir de aca:

//------- otra forma de AGREGAR un atributo a la variable caja con el (elemento creado + contenido) osea ya definida con su appenchild dentro:
// por ejem ponerle una Id
caja.id = 'primera';

//como cambiarle la Class (si hay una, aca la reescibe)
caja.className = 'caja naranja';

// ----- como saber cual es el elemento padre
// para eso usamos document.getElementByTagName de la misma forma que el primer video:

var cajas = document.getElementsByTagName('div');
//cajas[0].parentNode; le decimos del 1er elemento posicion 0 del array, traeme el padre (osea el padre de este div que guardamos en cajas ). y tenemos que guardarlo en una variable ejemplo :padre
var padre = cajas[0].parentNode;
console.log(padre);// me muestra que es el section en consola para este ejemp.

//---- conociendo el padre vamos a posicionar un elemento dentro
//teniamos el codigo del primer video donde conseguimos la id de la primer caja y la guardamos en var primeraCaja.
var primeraCaja = document.getElementById('primera-caja');

//ahora seleccionamos el elemento padre (aca es el → section)
padre.insertBefore(caja, primeraCaja)// con insertBefore() insertamos el elemento caja (es el que creamos), antes del elemento primeraCaja el que tiene la id: primera-caja
// dato : si acomodamos el elemento asi el paso 5 lo podemos omitir y usar esta forma.

// si queremos posicionarla despues de la caja uno sabiendo que es como un array lo hacemos asi:
//padre.insertBefore(caja, cajas[0]);// traducido → inserBefore(elemento que creamos, elemento del array en este caso se ubica delante de la ubicacion que le damos)

// y para agregar al final de los otros hijos ,es como hicimos en el paso 5 con .appenChild() 

// --- reemplazar un nodo por otro:

//padre.replaceChild(caja , cajas[2]);// 1er parametro = el elemento que reemplaza y el 2 param es el que es reemplazado.


//---- como eliminar un nodo
//padre.removeChild(cajas[3]);// eliminamos la caja en esa posicion.



/*nota importante: hay que tener en cuenta que cada nodo (o tag ) que nos traemos para guardarlo y hacer uso en una variable, 
los datos que estaran dentro seran una coleccion html,  seria lo mismo que un array */








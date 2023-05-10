//cada elemento en el html se le llama nodo. ejemplo <div></div>
/* con javascript podemos acceder a cada elemento del html. para poder hacerlo antes hay que 
linkear el archivo  .js en el archivo HTML como: <script src="main.js"></script>*/


// 1er paso obtener el elemento para poder modificarlo.

//document.  se usa para hacer uso del archivo html o sus partes.

//1ra forma ----   byTagName

//var cajas = document.getElementsByTagName('div') //por tag name  o por nombre de etiqueta div sin el menor que y el mayor que <>; Si eso lo guardamos en una variable tendriamos un array. aca por ejemplo aca cajas[]
//cajas[0].textContent = 'Hola Mundo';// cambiamos el contenido con .textContent aplicado al array y seleccionando el indice o ubicacon del elemento.
//cajas[1].innerHTML = '<h1>Hola Mundo</h1> ';//dentro de este elemento insertamos un h1


//2da forma ----   byClassName    

//var cajas = document.getElementsByClassName('cajas') // no se recomienda usar clases con js. sino que se usa para css
//declaramos la variable cajas y traemos el elemento por la clase. Lo que nos guarda es una HTMLcolection[]  osea un array como con tagName visto antes.



//3er forma -----   byId ------- Mas usada!

var primeraCaja = document.getElementById("primera-caja");
//primeraCaja.textContent = 'Primera Caja'; // podemos acceder y cambiar el texto.
primeraCaja.innerHTML = '<h1>Hola Mundo</h1>';

//aca en lugar de modificar como array, lo hacemos aplicando .textContent (modif el texto) y .innerHTML (inserta etiqueta y contenido al html )a la variable.








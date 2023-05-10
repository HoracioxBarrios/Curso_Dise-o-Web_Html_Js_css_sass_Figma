/*(function(){codigo}); falcon sugiere meter todo el codigo dentro la funcion auto invoke para proteger el codigo*/


    //*  traemos los nodos del html y lo guaramos dentro de una variable para hacer uso mas abajo

var formulario = document.getElementById('formulario'),
    nombre = formulario.nombreUno,//declaramos mas variables sin poner var ,porque cerramos las lineas con comillas simples.
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

    // * VALIDAMOS EL NOMBRE
    function validarNombre(e){//pasamos el parametro "e"
        if(nombre.value ==''|| nombre.value == null){
            console.log('por favor completa el nombre'); //al querer ver por consola, no nos muestra nada, ya que al precionar el boton igual envia los datos y recarga la pagina. para evitar eso ver la linea de abajo:
            error.style.display = 'block';// el ul de clase error en el css lo teniamos dysplay :none. con esto lo estamos haciendo visible.
            error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li)';//estamos agregando un li dentro del ul
            // lo del iner de arriba si no lo pusieramos asi , y escribieroamos solo inerhtml + <li >sadsad</li>/li> .solo nos mostraria esta linea de errores y no todos lo que tenemos .
            //error.innerHTML += '<li>Por favor completa el nombre</li)'; // una forma mas corta de escribir lo de arriba.
            e.preventDefault();// con esto previene que se envie el form y se pueda corregir el nombre
        }else {
            error.style.display = 'none';//si esta todo bien, aca reseteamos el error y ponemos que no se muestre.
        }
    }   

    // * VALIDAMOS EL CORREO
    function validarCorreo(e){
        if(correo.value == '' || correo.value == null){
            console.log('Por favor completa el correo');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Por favor Introduce un correo</li>'

            e.preventDefault();


        }else {
            error.style.display ='none';
        }
    }
    // * VALIDAMOS EL SEXO
    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
            console.log('Por favor completa un sexo');
            error.style.display = 'block';
            error.innerHTML += '<li> por favor completa el sexo</li>';

            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }
    // * VALIDAMOS LOS TERMINOS
    function validarTerminos(e){
        if(terminos.checked == false){ // aca corroboramos que que este checked . si no esta opimido es false y si esta aceptado ,true
            console.log('Por favor acepta los terminos');
            error.style.display = 'block';
            error.innerHTML = error.innerHTML + '<li> Por favor acepta los terminos</li>';

            e.preventDefault();
        }
    }

        //* FUNCION QUE LLAMA A LAS DEMAS FUNCIONES 
        //funcion validarFormulario() lleva adentro la llamada a las demas funciones.
        function validarFromulario(e){//hay que pasarle la variable "e" por parametro
            error.innerHTML = ''; // impedimos que se duplique al momento de enviar el registro.
            validarNombre(e); //hay que pasarle la variable "e" por parametro aca tambien
            validarCorreo(e);
            validarSexo(e);
            validarTerminos(e);
        }


        // ********** EL BOTON DE ENVIAR DEPENDE DEL EVENTO SUBMIT QUE LLAMA A LA FUNCION **********
            formulario.addEventListener('submit' , validarFromulario);




/*dato:
    <input type="radio" name="sexo" id="mujer" value="mujer">
    <label for="mujer">Mujer</label>
se enlazan en el html con la Id, en este caso 'mujer'*/



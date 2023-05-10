function suma() {
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = parseFloat(document.getElementById("numero1").value);
    numeroDos = parseFloat(document.getElementById("numero2").value);
    resultado = numeroUno + numeroDos;

    document.getElementById('resultado').value = resultado;
}

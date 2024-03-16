//alexis Rodriguez Camacho 1260047

function actividad19() {

    var valores = [true, 10, false, "codigo", "herramientas", 7];
    var texto1 = valores[3];
    var texto2 = valores[4];
    var textoMayor = texto1.length > texto2.length ? texto1 : texto2;
    alert("El texto mayor es:" + textoMayor);

    var bool1 = valores[0];
    var bool2 = valores[2];
    var resultadoTrue = bool1 || bool2;
    var resultadoFalse = bool1 && bool2;
    alert("Operadores para obtener true:" + resultadoTrue + "\nOperadores para obtener false:" + resultadoFalse);


    var num1 = valores[1];
    var num2 = valores[5];
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    alert("Suma: " + suma + "\nResta: " + resta + "\nMultplicacion:" + multiplicacion + "\nDivision: " + division + "\nModul: " + modulo);

}
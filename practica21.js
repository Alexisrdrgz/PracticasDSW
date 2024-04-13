var peso,opcion,peso_tierra,peso_marte,peso_jupiter,resultado

peso_tierra,peso = prompt("Ingresa tu peso: ");
opcion = prompt("Elija un planeta para conocer su peso:\n 1) Marte \n 2) Jupiter");
if (opcion==1) {
    resultado = (peso * peso_marte) / peso_tierra
    alert("Su peso en Marte es: "+resultado);
}else{
    if (opcion==2) {
        resultado = (peso * peso_jupiter) / peso_tierra
        alert("Su peso en Jupiter es: "+resultado);        
    } else {
        alert("La opcion no existe");
    }
}
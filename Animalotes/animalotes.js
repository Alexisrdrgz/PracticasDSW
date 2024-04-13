// se declara el arreglo de animales y se inicializa con las imagenes de los animales
let animales = ["alce.jpg", "elefante.jpg", "flamingo.jpg", "leon.jpg", "leopardo.jpg","oso.jpg","panda_rojo.jpg","tigre.jpg","perro.jpg","zorro.jpg"];
let correcta = [1,3,0,2,3,1,2,0,1,3];

//se declar vacio de las opciones de los animales
let opciones = [];
//se inicializa los arreglos con la funcion push para agregar los elementos al arreglo
opciones.push(["Leon", "Alce", "Perro", "Tigre"]);
opciones.push(["Leopardo", "Perro", "Flamingo","Elefante"]);
opciones.push(["Flamingo", "Panda Rojo", "Elefante", "Zorro"]);
opciones.push(["Perro", "Elefante", "Leon", "Alce"]);
opciones.push(["Leon", "Alce", "Perro", "Leopardo"]);
opciones.push(["leopardo", "Oso", "alce", "tigre"]);
opciones.push(["perro", "leopardo", "Panda Rojo", " alce"]);
opciones.push(["tigre", "Elefante", "Flamingo", "Leon"]);
opciones.push(["Leon", "perro", "panda Rojo", "Leopardo"]);
opciones.push(["Leon", "Alce", "Perro", "zorro"]);

let posActual = 0;
let cantidadAcertadas = 0;

// se declara la funcion comenzarJuego para que se muestre la pantalla de juego
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarAnimal();

}
// se declara la funcion cargarAnimal para que se muestre la imagen del animal y las opciones
function cargarAnimal(){
    if(animales.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgAnimales").src = "img/" + animales[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}
// se declara la funcion limpiarOpciones para que se limpie las opciones de los animales
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}
// se declara la funcion comprobarRespuesta para que se compruebe si la respuesta es correcta o incorrecta
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarAnimal,1000);
}
// se declara la funcion terminarJuego para que se muestre la pantalla final
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = animales.length - cantidadAcertadas;
}
// se declara la funcion volverAlInicio para que se muestre la pantalla inicial
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
// dias de la Semana
 
var weekDays = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
console.log(weekDays);
weekDays.splice(0,1);
console.log(weekDays);
weekDays.unshift("Lunes");
weekDays.push("Hola");
console.log(weekDays);
weekDays[7] = "Hola Como estas?"
console.log(weekDays);

// Ciclos
var i = 0;
var total = 0;
var string = "";
while(i<=5){

    total += i;
    string += i+" + "; 
    i++
}
console.log("la suma de "+string+" es = "+total);

// Ciclo Do - While
var number = 5;
var fac = 1;
do{

 fac *= number;

 number--;
}while(number>0);
console.log("El factorial  es = "+fac);


// Ciclo For
for (var i=0; i<7; i++){
    if(i != 3){
        console.log("Hola");
    }

    if(i == 3){
        console.log("Soy el 4to Hola");
    }
}
console.log("Acabamos de saludar");

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// Ciclo For in
console.log("Ejemplo de for...in:");
for (var indice in meses) {
    console.log(meses[indice]);
}

// Ciclo For Each
console.log("\nEjemplo de forEach:");
meses.forEach(function(mes) {
    console.log(mes);
});

// Ciclo For of
console.log("\nEjemplo de for...of:");
for (var mes of meses) {
    console.log(mes);
}

// Omitir Julio
console.log("Meses omitiendo Julio:");
for (var mes of meses) {
    if (mes !== "Julio") {
        console.log(mes);
    }
}

// Agregar "Diciembre" fuera del arreglo
meses.push("Diciembre");

// Imprimir todos los meses incluido Diciembre
console.log("\nTodos los meses incluyendo Diciembre:");
for (var mes of meses) {
    console.log(mes);
}
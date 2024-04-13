function imprimirSuma(){
    var calificacion1 = parseInt(document.getElementById("calificacion1").value);
    var calificacion2 = parseInt(document.getElementById("calificacion2").value);
    var calificacion3 = parseInt(document.getElementById("calificacion3").value);
    var calificacion4 = parseInt(document.getElementById("calificacion4").value);
    var calificacion5 = parseInt(document.getElementById("calificacion5").value);
    var calificacion6 = parseInt(document.getElementById("calificacion6").value);
    var calificacion7 = parseInt(document.getElementById("calificacion7").value);
    var calificacion8 = parseInt(document.getElementById("calificacion8").value);
    promedio = (calificacion1+calificacion2+calificacion3+calificacion4+calificacion5+calificacion6+calificacion7+calificacion8)/8;
    if (promedio < 85){
        alert(`
    En la asignatura 1 obtuviste ${calificacion1}
    En la asignatura 2 obtuviste ${calificacion2}
    En la asignatura 3 obtuviste ${calificacion3}
    En la asignatura 4 obtuviste ${calificacion4}
    En la asignatura 5 obtuviste ${calificacion5}
    En la asignatura 6 obtuviste ${calificacion6}
    En la asignatura 7 obtuviste ${calificacion7}
    En la asignatura 8 obtuviste ${calificacion8}
    El promedio de tus calificaciones es ${promedio}
    --------------------
    PRESENTAR ORDINARIO
    --------------------
    `);
    }else{
        alert(`
        En la asignatura 1 obtuviste ${calificacion1}
        En la asignatura 2 obtuviste ${calificacion2}
        En la asignatura 3 obtuviste ${calificacion3}
        En la asignatura 4 obtuviste ${calificacion4}
        En la asignatura 5 obtuviste ${calificacion5}
        En la asignatura 6 obtuviste ${calificacion6}
        En la asignatura 7 obtuviste ${calificacion7}
        En la asignatura 8 obtuviste ${calificacion8}
        El promedio de tus calificaciones es ${promedio}
        --------------------
        EXENTASTE ORDINARIO
        --------------------
        `);
    }
    

}
operation = prompt('Que tipo de operacion se realizara? \n suma \n resta\nmultiplicacion\ndivicion\nresiduo');
a = parseInt(prompt('Ingresa un numero'));
b=  parseInt(prompt('Ingresa otro numero'));

function OperacionesMatematicas(operation,a,b){
 switch(operation){
    case 'suma':
        result = a + b;
        console.log('La suma es '+result);
        break;
    case 'resta':
        result = a - b;
        console.log('La resta es '+result);
        break;
    case 'multiplicacion':
        result = a * b;
        console.log('La multiplicacion es '+result);
        break;
    case 'divicion':
        result = a / b;
        console.log('La divicion es '+result);
        break;
    case 'residuo':
        result = a % b;
        console.log('El residuo es '+result);
    break;
    default:
        console.log('0');
        break;    
 }
}

OperacionesMatematicas(operation,a,b);
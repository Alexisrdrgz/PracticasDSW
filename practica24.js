var flag = prompt('Hay un huracan (Y/N)');
var hayUnHuracan;
if (flag=='Y' || flag == 'y') {
    hayUnHuracan = true;
} 
if(flag=='N' || flag == 'n') {
    hayUnHuracan = false;
}
function HayUnHuracan(hayUnHuracan){
    if (hayUnHuracan==true) {
        console.log('Hay un Huracán');
    }  
    if(hayUnHuracan==false){
        console.log('Está Soleado');
    }
}

HayUnHuracan(hayUnHuracan);
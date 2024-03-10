console.log('igualdad de valores.');
console.log();

let cal1, cal2;

function igualdadExpresion(a, n){
    if (a != 0){
        cal1 = a ** (-n);
        cal2 = 1 / (a**n);

        if (cal1 === cal2){
            return `Se comprueba la igualdad. ${cal1} - ${cal2}`;
        } else {
            return 'No se comprueba la igualda.';
        }
    } else {
        return 'A tiene que ser diferente de cero.';
    }
}

console.log(igualdadExpresion(10, 2));


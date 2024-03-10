console.log('Comprovacion de numeros.');
console.log();

function comprovacion(numero){

    if (numero > 0){
        return 'positivo';
    } else if (numero === 0) {
        return 'nulo';
    } else {
        return 'Negativo';
    }
}

console.log(comprovacion(1012));
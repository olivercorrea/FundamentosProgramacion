console.log('Paridad de numero.');
console.log();

function paridad(numero){

    if (numero === 0){
        return 'nulo';
    } else if ((-1)**numero > 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

console.log(paridad(12));
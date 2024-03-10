console.log('Calculo de expresion.');
console.log();

let respuesta;

function expresion(a, c, d){

    if (d != 0){
        respuesta = (a-c)/d
        return respuesta;
    } else {
        return 'no se pueden efectuar las operaciones';
    }
}

console.log(expresion(26, 7, 0));
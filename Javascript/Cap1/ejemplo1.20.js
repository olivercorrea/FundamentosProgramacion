console.log('Distancia entre dos puntos');

let x1, y1;
let x2, y2;

let distancia;

function distanciaP(x1, y1, x2, y2){
    distancia = ((x1-x2)**2 + (y1-y2)**2)**0.5;

    return distancia;
}

console.log('Resultado: ', distanciaP(3.17, 4.78, 4.99, 7.88));

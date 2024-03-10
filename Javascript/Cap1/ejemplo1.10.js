console.log('Area de una circunferencia');
console.log('');

let radio = 7.25;
let area;
let circunferencia;
const pi = Math.PI;

function areaCircunferencia(){
    area = pi * radio**2;
    console.log('Area: ', area);
}

function longCircunferencia(){
    circunferencia = 2 * pi * radio
    console.log('Longitud de la circunferencia: ', circunferencia)
}


areaCircunferencia();
longCircunferencia();
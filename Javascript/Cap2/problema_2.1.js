console.log('Grillo como termometro.');

let numeroSonidos, temperatura;

function grilloTemperatura(numeroSonidos) {
    if (numeroSonidos >= 0){
        temperatura = numeroSonidos/4 + 40;
        return temperatura
    } 
}

console.log(grilloTemperatura(-5))
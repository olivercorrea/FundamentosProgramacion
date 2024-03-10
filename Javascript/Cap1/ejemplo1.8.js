console.log('Dinosaurio');
console.log('');

let nom = 'Plateosaurus';
let pes = 29;
let lon = 343;

let peskil;
let lonmet;

function librasKilogramos(pes){
    peskil = pes * 0.453592;
    console.log('peso en kilogramos: ', peskil)
}

function piesMetros(lon){
    lonmet = lon * 0.3048; 
    console.log('longitud en metros: ', lonmet);
}

console.log(nom);
librasKilogramos(pes);
piesMetros(pes);


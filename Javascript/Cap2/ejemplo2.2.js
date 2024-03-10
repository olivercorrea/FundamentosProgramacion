console.log('Aumento de sueldo si este es menor a 1000');

let sueldo;
let aumento;
let nuevoSueldo;

function aumentoSueldo(sueldo){

    if (sueldo < 1000){
        aumento = sueldo * 0.15;
        nuevoSueldo = sueldo + aumento;
        return nuevoSueldo;
    }
}

console.log('Nuevo Sueldo: ', aumentoSueldo(875.5))


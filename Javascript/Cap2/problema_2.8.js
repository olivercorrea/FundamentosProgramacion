console.log('Calculo el aumento segun criterios de evaluacion.');

let sueldo, nSueldo;

function nuevoSueldo(sueldo){
    if (sueldo < 1000){
        nSueldo = sueldo * 1.25;
        return nSueldo;
    } else if (sueldo <= 1500){
        nSueldo = sueldo * 1.21;
        return nSueldo;
    } else {
        nSueldo = sueldo * 1.18;
        return nSueldo;
    }
}

console.log('Nuevo Sueldo: ', nuevoSueldo(1501));




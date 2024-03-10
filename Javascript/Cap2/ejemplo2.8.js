console.log('Categira del trabajador y su nuevo sueldo.');

let categoria, sueldo, nSueldo;

function nuevoSueldo(categoria, sueldo) {
    switch (categoria){
        case 1:
            nSueldo = sueldo * 1.15;
            return nSueldo;
            break;
        case 2:
            nSueldo = sueldo * 1.10;
            return nSueldo;
            break;
        case 3:
            nSueldo = sueldo * 1.08;
            return nSueldo;
            break;
        case 4:
            nSueldo = sueldo * 1.07;
            return nSueldo;
            break;
        default:
            return 'La categoria es desde el numero 1 al 4.';
    }
}

console.log('nuevo sueldo: ', nuevoSueldo(3, 3800));
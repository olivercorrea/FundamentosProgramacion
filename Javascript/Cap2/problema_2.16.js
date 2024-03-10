console.log('Precio de voleto de viaje.');
console.log();

let costo;

function precioVoleto(dis, tem) {

    if ((dis*2)>800 && tem > 7){
        costo = dis*2*0.17*0.7;
    } else {
        costo = dis * 2 * 0.17;
    }

    return `Costo billete: ${costo}`;
}

console.log(precioVoleto(380, 10));


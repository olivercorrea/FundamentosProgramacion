console.log('Mientras or While');
console.log();

let sumgas = 0;
let gasto = 2528;

while (gasto != -1) {
    sumgas = sumgas + gasto;
    console.log('Gasto: ', gasto);
    gasto = gasto - sumgas;
}
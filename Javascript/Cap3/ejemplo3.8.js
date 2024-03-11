console.log('Suma de impares y promedio de pares.');
console.log();
// it does not work
let i = 0;
let num = 3;
let sumpar = 0;
let sumimp = 0;
let conpar = 0;
let propar = 0;

while (i <= 270) {
    if (num != 0) {
        if ((-1)**num > 0){
            sumpar = sumpar + num;
            conpar = conpar + 1;
        } else {
            sumimp = sumimp + num;
        }
    } else {
        i = i + 1;
    }
    i = i + 1;
    console.log('i: ', i);
}

propar = sumpar / conpar;

console.log('Suma de impares: ', sumimp);
console.log('Promedio de pares: ', propar);


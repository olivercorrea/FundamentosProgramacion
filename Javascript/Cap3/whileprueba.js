console.log('prueba de uso de while con array');
console.log();

let numeros = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
let i = 0

while (numeros[i] <= numeros.length){
    console.log(numeros[i]);
    i++;
}

console.log('Anoder loop but with for and showing the number To start iterating through an array from the last element');
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}

/*
i = 0;

while (numeros[i] >= numeros.length){
    console.log(numeros[i]);
    i--;
}
*/
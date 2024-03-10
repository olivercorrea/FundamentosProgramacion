console.log('Calculo de la expresion.');

let p, q, exp;

function expresion(p, q) {
    exp = p**3 + q**4 - 2*p**2;

    if (exp < 680) {
        return [p, q];
    }
}

console.log(expresion(2, 4));
console.log()

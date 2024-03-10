console.log('Switch Case 1');
console.log(' ');

let num, v, val;

function switchCase(num, v){
    switch (num) {
        case 1:
            val = 100 * v;
            return val;
            //break;  // el brear inpide que se compare con las demas opciones apesar de haber encontrado a su caso
        case 2:
            val = 100**v;
            return val;
            break;
        case 3:
            val = 100/v;
            return val;
            break;
        default:
            val = 0
            return 0;
    }
}

console.log(switchCase(2, 3));


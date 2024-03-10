console.log('Dados 3 numeros, escribir de forma desendente.');

let a, b, c;

function desendente(a, b, c) {
    
    if (a > b) {
        if (a > c) {
            if (b > c) {
                console.log(a, "-", b, "-", c);
                console.log("a-b-c");
            } else {
                console.log(a, "-", c, "-", b);
                console.log("a-c-b");
            }
        } else {
            console.log(c, "-", a, "-", b);
            console.log("c-a-b");
        }
    } else {
        if (b > c) {
            if (a > c) {
                console.log(b, "-", a, "-", c);
                console.log("b-a-c");
            } else {
                console.log(b, "-", c, "-", a);
                console.log("b-c-a");
            }
        } else {
            console.log(c, "-", b, "-", a);
            console.log("c-b-a");
        }
    }
}


desendente(3, 2, 1);
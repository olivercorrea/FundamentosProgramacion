console.log('Area de un triangulo dado sus tres lados.')

let l1 = 7.5;
let l2 = 7.5;
let l3 = 7.5;

let s;
let area;

function areaT(l1, l2, l3){
    s = (l1+l2+l3)/2;
    area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
    
    return area;
}

console.log('Area: ', areaT(l1, l2, l3));

//Fatorial

function fatorial(numero) {
    let fat = 1;
    for(let i = numero; i > 1; i--) {
        fat *= i;
    }
    return fat;
}

console.log(fatorial(5));
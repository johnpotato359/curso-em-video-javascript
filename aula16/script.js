function parImpar(numero) {
    if (numero % 2 == 0) {
        return `O Número ${numero} é PAR!`;
    } else {
        return `O Número ${numero} é ÍMPAR!`;
    }
}

//Chamada de função pelo console.log()
console.log(parImpar(12));


//Chamada de função utilizando variável
let numeroParImpar = parImpar(10);
console.log(numeroParImpar);
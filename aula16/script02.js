//Função comum
function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(2,8));

//Função com parâmetros pré definidos
function somaAlternativa(n1=0, n2=0) {
    return n1 + n2;
}

console.log(somaAlternativa(9));
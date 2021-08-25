document.getElementById('btnSomar').addEventListener('click', function somar() {
    var txtn1 = document.getElementById('txtn1');
    var txtn2 = document.getElementById('txtn2');
    var resultado = document.getElementById('resultado');
    var numero01 = Number(txtn1.value);
    var numero02 = Number(txtn2.value);
    var resultadoSoma = numero01 + numero02;

    resultado.innerHTML = `A soma de ${numero01} 
    e ${numero02} é igual a ${resultadoSoma}`;
});


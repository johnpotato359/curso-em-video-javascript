function somar() {
    var inputNum01 = window.document.getElementById('txtn1');
    var inputNum02 = window.document.getElementById('txtn2');
    var resultado = window.document.getElementById('resultado');
    var numero01 = Number(inputNum01.value);
    var numero02 = Number(inputNum02.value);
    var soma = numero01 + numero02;
    resultado.innerHTML = `A soma entre ${numero01} 
    e ${numero02} é igual a ${soma}`;
}







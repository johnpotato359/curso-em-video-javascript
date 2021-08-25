document.getElementById('btnVerificar').addEventListener('click',
function verificarVelocidade() {
    var txtvel = document.getElementById('txtvel');
    var velocidadeCarro = Number(txtvel.value);
    var resultado = document.getElementById('resultado');

    if (velocidadeCarro >= 15 && velocidadeCarro <= 60) {
        resultado.innerHTML = `Velocidade do Carro: ${velocidadeCarro}Km/H. Dirija com cuidado!`;
    } else if (velocidadeCarro > 60 && velocidadeCarro <= 70) {
        resultado.innerHTML = `Velocidade do Carro: ${velocidadeCarro}Km/H. Reduza a velocidade ou sera multado!`;
    } else {
        resultado.innerHTML = `Velocidade do Carro: ${velocidadeCarro}Km/H. VOCE FOI MULTADO!!`;
    }
});


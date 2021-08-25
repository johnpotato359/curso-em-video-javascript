var velocidadeCarro = Math.floor(Math.random() * 100) + 20;

if (velocidadeCarro > 20 && velocidadeCarro <= 60) {
    console.log(`Velocidade do Carro: ${velocidadeCarro}Km/H. Dirija com cuidado!`);
} else if (velocidadeCarro > 60 && velocidadeCarro <= 70) {
    console.log(`Velocidade do Carro: ${velocidadeCarro}Km/H. Reduza a velocidade ou sera multado!`);
} else {
    console.log(`Velocidade do Carro: ${velocidadeCarro}Km/H. VOCE FOI MULTADO!!`);
}
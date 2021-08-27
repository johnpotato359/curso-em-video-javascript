var getHoraAtual = new Date();
console.log(`Agora sao ${getHoraAtual.getHours()}hrs`)
if (getHoraAtual.getHours() < 12) {
    console.log('Bom Dia!');
} else if (getHoraAtual.getHours() <= 18) {
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite!');
}
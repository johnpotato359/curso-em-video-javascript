document.getElementById('btnVerificar').addEventListener('click', 
    function verificaNacionalidade() {
    var txtNacionalidade = document.getElementById('txtNacionalidade');
    var nacionalidade = txtNacionalidade.value;
    var resultado = document.getElementById('resultado');
    console.log(nacionalidade);
    if (nacionalidade == 'Brasil') {
        resultado.innerHTML = `Seu país de origem é ${nacionalidade}
        e você é brasileiro.`;
    } else {
        resultado.innerHTML = `Seu país de origem é ${nacionalidade} e
         você é estrangeiro.`;
    }
});


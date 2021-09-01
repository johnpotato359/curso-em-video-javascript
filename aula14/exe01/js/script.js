function contarNumeros() {
    let valorInicio = document.querySelector('input#txtInicio');
    let valorFim = document.querySelector('input#txtFim');
    let valorPasso = document.querySelector('input#txtPasso');
    let resultado = document.querySelector('div#resultado');

    let inicio = Number(valorInicio.value);
    let fim = Number(valorFim.value);
    let passo = Number(valorPasso.value);

    if(valorInicio.value.length == 0 || valorFim.value.length == 0 
        || valorPasso.value.length == 0) {
            alert('[ERRO] Dados incompletos ou incorretos!');
        }
    else {
        resultado.innerHTML = 'Contando...';
        if(inicio >= fim) {
            for(let i = inicio; i <= fim; i += passo) {
                resultado.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            for(let i = fim; i <= inicio; i -= passo) {
                resultado.innerHTML += ` ${i} \u{1F449}`;
                console.log(i);
            }
        }
        resultado.innerHTML += `\u{1F3C1}`;
    }
}

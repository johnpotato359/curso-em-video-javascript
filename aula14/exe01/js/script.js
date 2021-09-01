function contarNumeros() {
    let valorInicio = document.querySelector('input#txtInicio');
    let valorFim = document.querySelector('input#txtFim');
    let valorPasso = document.querySelector('input#txtPasso');
    let resultado = document.querySelector('div#resultado');

    let inicio = Number(valorInicio.value);
    let fim = Number(valorFim.value);
    let passo = Number(valorPasso.value);

    if(valorInicio.value.length == 0 
        || valorFim.value.length == 0
        || valorPasso.value.length == 0){
            alert('[ERRO] Faltam dados!');
        } else {
            resultado.innerHTML = 'Contando...';
            if(inicio < fim){
                for(let i = inicio; i <= fim; i+= passo){
                    resultado.innerHTML += `${i} \u{1F449}`;
                }
            } else {
                for(let i = inicio; i >= fim; i -= passo) {
                    resultado.innerHTML += `${i} \u{1F449}`;
                }
            }
            resultado.innerHTML += `\u{1F3C1}`;
        }
}


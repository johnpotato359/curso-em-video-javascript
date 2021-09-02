function gerarTabuada() {
    let numeroTabuada = document.querySelector('input#txtNumero');
    let selectTabuada = document.querySelector('select#selectTabuada');

    if(numeroTabuada.value.length == 0){
        alert('Por favor, digite um numero no campo');
    } else {
        let numero = Number(numeroTabuada.value);
        selectTabuada.innerHTML = '';
        for(i = 1; i <= 10; i++) {
            let item = document.createElement('option');
            item.text = `${numero} X ${i} = ${i*numero}`;
            item.value = `selectTabuada${i}`;
            selectTabuada.appendChild(item);
        }
    }
}
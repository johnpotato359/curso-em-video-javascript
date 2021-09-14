let num = document.querySelector('input#txtNumero');
let lista = document.querySelector('select#selectLista');
let res = document.querySelector('div#resultado');
let valores = [];
let contador = 0;


function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        
        return true;
        
    } else {
        
        return false;
        
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {

        return true;
    } else {
      
        return false;
    }
}

function adicionarNumero() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push((Number(num.value)));
        contador++;
        let item = document.createElement('option');
        item.text = `Valor ${num.value} foi adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor invalido ou ja encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function relatorioFinalizar() {
    if (valores.length == 0) {
        alert('Insira valores no campo')
    } else {
        let soma = 0;
        let media = 0;
        let maior = valores[0];
        let menor = valores[0];
        for(let i in valores) {
            soma+= valores[i];
            if(valores[i] > maior) {
                maior = valores[i];
            } 

            if(valores[i] < menor) {
                menor = valores[i];
            }
        }
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${valores.length} numeros cadastrados.</p>`;
        res.innerHTML += `<p>O menor valor é ${menor} e o maior valor é ${maior}`;
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores é: ${soma/valores.length}</p>`;
    }
}
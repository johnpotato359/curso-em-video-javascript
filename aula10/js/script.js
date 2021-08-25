function mouseClicar() {
    var divArea = window.document.getElementById('area');
    divArea.innerText = 'Clicou!';
    divArea.style.backgroundColor = 'red';
}

function mouseEntrou() {
    var divArea = window.document.getElementById('area');
    divArea.innerText = 'Entrou!';
    divArea.style.backgroundColor = 'blue';
}

function mouseSaiu() {
    var divArea = window.document.getElementById('area');
    divArea.innerText = 'Saiu!';
    divArea.style.backgroundColor = 'teal';
}

divArea.addEventListener('click', mouseClicar);
divArea.addEventListener('onmouseenter', mouseEntrou);
divArea.addEventListener('onouseout', mouseSaiu);
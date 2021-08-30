function carregaTema() {
    var getHora = new Date();
    var hora = 19;
    var mensagem = document.getElementById('mensagem');
    var imagem = document.getElementById('imagem');
    mensagem.innerHTML = `Agora sao ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        imagem.src = 'img/morning.png';
        document.body.style.backgroundColor = 'rgba(50, 117, 241, 0.774)';
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'img/afternoon.png';
        document.body.style.backgroundColor = 'rgba(223, 134, 62, 0.794)';
    } else {
        imagem.src = 'img/evening.png';
        document.body.style.backgroundColor = 'rgba(20, 20, 77, 0.774)';
    }
}
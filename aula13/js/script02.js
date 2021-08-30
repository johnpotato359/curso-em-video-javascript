function verificarIdade() {
    var data = new Date ();
    var ano = data.getFullYear();

    var formularioAno = document.getElementById('txtAno');
    var resultado = document.querySelector('div#mensagem');
    var formularioSexo = document.getElementsByName('radsex');

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    var idadeUsuario = ano - Number(formularioAno.value);
    var genero = '';

    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        if(formularioSexo[0].checked) {
            genero = 'Homem';
            if (idadeUsuario >= 0 && idadeUsuario < 13) {
                //Criança
                img.setAttribute('src', '../aula13/img/foto-crianca-menino.png');
            } else if(idadeUsuario >= 13 && idadeUsuario < 22) {
                //Adolescente
                img.setAttribute('src', '../aula13/img/foto-adolescente-homem.png');
            } else if (idadeUsuario >= 19 && idadeUsuario < 66) {
                //Adulto
                img.setAttribute('src', '../aula13/img/foto-adulto-homem.png');
            } else {
                //Idoso
                img.setAttribute('src', '../aula13/img/foto-velho-homem.png');
            }

        } else if(formularioSexo[1].checked) {
            genero = 'Mulher';
            if (idadeUsuario >= 0 && idadeUsuario < 13) {
                //Criança
                img.setAttribute('src', '../aula13/img/foto-crianca-menina.png');
            } else if(idadeUsuario >= 13 && idadeUsuario < 22) {
                //Adolescente
                img.setAttribute('src', '../aula13/img/foto-adolescente-mulher.png');
            } else if (idadeUsuario >= 19 && idadeUsuario < 66) {
                //Adulto
                img.setAttribute('src', '../aula13/img/foto-adulto-mulher.png');
            } else {
                //Idoso
                img.setAttribute('src', '../aula13/img/foto-velho-mulher.png');
            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idadeUsuario} anos.`;
        resultado.appendChild(img);
    }
    
}
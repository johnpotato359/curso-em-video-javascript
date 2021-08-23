var corpo = window.document.body;
corpo.style.backgroundColor = 'blue';

//Selecionando elementos por TagName
var p1 = window.document.getElementsByTagName('p')[1];
var ngrt = window.document.getElementsByTagName('strong')[0];

ngrt.style.backgroundColor = 'black';

//Selecionando elementos por Id
var btn = window.document.getElementById('button');
btn.style.color = 'red';

//Selecionando elementos por Seletor


window.document.write(btn.innerText);
window.document.write(p1.innerText); // .innerText pega a tag sem a sua formatação css.
window.document.write(p1.innerHTML); // .innerHTML pega a tag com as formatações css.





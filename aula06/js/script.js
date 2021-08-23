//var nome = window.prompt("What's your name?");
//window.alert('Hello, ' + nome + ' nice to meet you');

// var number1 = window.prompt('Type a number'); // prompt returns a String Value
// var number2 = window.prompt('Type another number');
// var sum = number1 + number2; // The sum of two string is a concatenation, exemple " '10' + '20' = '1020' "

// window.alert('Result: ' + sum);

//var number1 = Number(window.prompt('Type a number'));
//var number2 = Number(window.prompt('Type another number'));

//var sum = Number.parseInt(number1 + number2);

//window.alert(`The Sum's result of ${number1} and ${number2} is ${sum}`);

//var firstName = window.prompt('What is your name?');

//window.document.write(`Hello, <strong>${firstName}</strong>! Nice to meet you.<br>`);
//window.document.write(`Your name has ${firstName.length} letters`)

var number3 = Number(window.prompt('Type a number:'));

document.write(`Your number is ${number3.toFixed(2)}<br>`); //.toFixed(n) -> round a number
document.write(`Your number is ${number3.toFixed(2).replace('.', ',')}<br>`) //.replace -> replace a especific char for one that you want

document.write(`Your number is ${number3.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>`);
document.write(`Your number is ${number3.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}<br>`);
document.write(`Your number is ${number3.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})}<br>`);

var x = 8;
var age = 20;

var res = x % 2 == 0 ? 5: 9; //Operador Ternario, se a condicao de x % 2 == 0 for verdadeira res ira atribuir 5 senao 9.
var res2 = x % 2 == 1 ? 5: 9;
var canDrive = age >= 16 ? 'ALLOWED': 'NOT ALLOWED';

document.write(`${res}<br>`);
document.write(`${res2}<br>`);
document.write(`Can you drive? ${canDrive}`);
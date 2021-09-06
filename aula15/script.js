let arrayNumeros = [5, 8, 4];

arrayNumeros[3] = 6;
console.log(arrayNumeros);
arrayNumeros.push(7); //Adiciona elementos no final do array
console.log(arrayNumeros)
console.log(`O tamanho do array é: ${arrayNumeros.length} espaços.`);
arrayNumeros.sort();
console.log(arrayNumeros);


//Imprimir valores do array - Forma Básica
for(let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
}
console.log('===========//===========');


//Imprimir valores do array - Forma Recente
for(let i in arrayNumeros) {
    console.log(arrayNumeros[i]);
}

//Buscar valor do parâmetro dentro do array
console.log(`O número de busca está na posição ${arrayNumeros.indexOf(7)}`);

//Retorna -1 caso o valor não exista dentro do array
if (arrayNumeros.indexOf() == -1){
    console.log(`O valor não existe`);
}
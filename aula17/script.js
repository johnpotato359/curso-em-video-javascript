let amigo = {nome: 'Joseph', 
sexo:'M',
 peso: 85.4,
engordar(p=0){
    console.log('Engordou!');
    amigo.peso += p;
}};

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
//Fatorial Recursiva
function fatorial(numero) {
    if (numero == 1) {
        return 1;
    } else {
        return numero * fatorial(numero-1);
    }
}

console.log(fatorial(5));

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/
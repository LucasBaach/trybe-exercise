const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// oddsAndEvens.sort((a, b) => a - b); dessa maneira o js esta pegando os numeros, subtraindo entre eles e comparando qual valor e menor e maior, fazendo assim a sequencia crescente.


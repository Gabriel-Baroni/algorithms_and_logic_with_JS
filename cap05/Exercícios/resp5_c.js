const prompt = require('prompt-sync')();
const numero = Number(prompt('Digite um número inteiro: '));
let divisores = "";
let soma = 0
for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
        divisores+= i + ", "
        soma += i
    } 
}
console.log(`Os divisores de ${numero} são: ${divisores}`);
if (soma == numero) {
    console.log(`${numero} é um número perfeito.`);
    console.log(`A soma dos seus divisores é: ${soma}`);
} else {
    console.log(`${numero} não é um número perfeito.`);
    console.log(`A soma dos seus divisores é: ${soma}`);
}
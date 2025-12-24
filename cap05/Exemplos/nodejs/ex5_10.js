const prompt = require('prompt-sync')();    
let valor = Number(prompt('Digite um valor: '));
const num = Number(prompt("Número de parcelas:"))
const ValorParcelas = Math.floor(valor / num)
const valorFinal = ValorParcelas + (valor % num)
for (let i = 1; i < num; i++){
    console.log(`Parcela ${i}: R$ ${ValorParcelas.toFixed(2)}`);

}
console.log(`Parcela ${num}: R$ ${valorFinal.toFixed(2)}`);
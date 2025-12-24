const prompt = require('prompt-sync')();
const fruta = prompt('Digite o nome de uma fruta: ');
const num = Number(prompt('Digite um número: '));
let resp=""
for (let i =1; i <=num; i++){
    resp+=fruta+" * "
}
console.log(resp);  

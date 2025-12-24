const prompt = require('prompt-sync')();   
let chinchilas = Number(prompt('Digite o número de chinchilas: '));
const anos = Number(prompt('Digite o número de anos: '));
if (chinchilas <2){
    console.log('Número de chinchilas insuficiente para reprodução.');
} else{
    for (let i = 1; i<=anos; i++){
        if (i > 1){
            chinchilas = (chinchilas *3)
            console.log(`Ano ${i}: ${chinchilas} chinchilas\n`);
        } else {
            console.log(`Ano ${i}: ${chinchilas} chinchilas\n`);
        }



    }
}
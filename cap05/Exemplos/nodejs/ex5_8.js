const pront = require('prompt-sync')();
console.log("Programa Anos de Copa do Mundo. Digite 0 para sair")
console.log("-----------------------------------------")
do{
    const ano = Number(pront("Digite um ano:"))
    if (ano === 0) {
        break
    } else if (ano == 1942 || ano ==1946){
        console.log("Não houve Copa do Mundo nesse ano.")
    } else if (ano >= 1930 && ano % 4 == 2){
        console.log("Houve Copa do Mundo nesse ano.")
    } else {
        console.log("Não houve Copa do Mundo nesse ano.")
    }
}while (true);
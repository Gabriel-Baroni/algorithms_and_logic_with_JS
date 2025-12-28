const prompt = require("prompt-sync")()
console.log("Informe os valores dos saques")
const saques =[]
do{
    const valor = Number(prompt("Digite o valor do saque:"))
    if(valor == 0){
        break
    }
    saques.push(valor)
     if(valor % 10 == 0){
        console.log("Saque realizado com sucesso")
     } else{
        console.log("Saque inválido. Precisa ser número múltiplo de 10")
     }

} while (true)
console.log("\n Saques Válidos")
console.log("-".repeat(40))
const saquesValidos = saques.filter( saque => saque % 10 == 0)

for (const saque of saquesValidos){
    console.log(saque.toFixed(2))
}
const saquesInvalidos = saques.length - saquesValidos.length
console.log(`Número de saques inválidos ${saquesInvalidos}`)
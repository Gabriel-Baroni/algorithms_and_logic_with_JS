const prompt = require("prompt-sync")()
console.log("Digite o nome dos clientes")

const clientes = []

do{
    const nome = prompt("Digite o nome do cliente: ")
    if(nome=="Fim"){
        break
    }
    const idade = Number(prompt("Digite a idade do cliente: "))
    clientes.push({nome, idade})
}while(true)
console.log("\nFila preferencial")
console.log(".".repeat(40))
const filaPref = clientes.filter(cliente => cliente.idade >= 60)
filaPref.forEach((fila, i) =>{
    console.log(`${i+1}. ${fila.nome}`)
})


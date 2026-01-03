const prompt = require("prompt-sync")()
const dataE = prompt("Digite a data da Infração (DD-MM-AAAA): ")
const valor = parseFloat(prompt("Digite o valor da infração: "))
const partes = dataE.split("-")
const dia = Number(partes[0])
const mes = Number(partes[1]) - 1 
const ano = Number(partes[2])
const dataL = new Date (ano, mes, dia)
dataL.setDate(dataL.getDate() + 90 )
const valorD = valor * 0.8

console.log(`A data limite para o pagamento é: ${dataL}`)
console.log(`O valor a ser pago é R$ ${valorD.toFixed(2)}`)

const prompt = require("prompt-sync")()
const mensagem = prompt("Digite a mensagem:")
mensagem.trim()
const tam = mensagem.length
pares = ""
impar = ""
for (let i = 0; i < tam; i++){
    if((i + 1) % 2 == 0){
        pares += mensagem[i]
    } else {
        impar+= mensagem[i]
    }
}
const mensagemC = pares + impar
console.log(`Mensagem cripitografada: ${mensagemC}`)
console.log(`Mensagem original ${mensagem}`)
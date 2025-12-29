const prompt = require("prompt-sync")()
const formula = prompt("Fórmula:")
let abre = 0
let fecha = 0
for (const simbolo of formula){
    if(simbolo == "("){
        abre++
    }
    if (simbolo == ")"){
        fecha++
    }

    if(fecha > abre){
        break
    }
}
    if(fecha == abre){
        console.log("Ok, formula correta")
    } else {
        console.log("Fórmula errada")
    }


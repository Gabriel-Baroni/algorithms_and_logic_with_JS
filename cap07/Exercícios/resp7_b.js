const prompt = require("prompt-sync")()
const frase = prompt("Digite a frase: ")


const fraseLimpa = frase.replace(/\s+/g, '').toUpperCase()

const fraseInvertida = fraseLimpa.split("").reverse().join("")

console.log("-".repeat(20))
if (fraseLimpa === fraseInvertida) {
    console.log(`"${frase}" \nÉ um palíndromo!`)
} else {
    console.log(`"${frase}" \nNão é um palíndromo.`)
}
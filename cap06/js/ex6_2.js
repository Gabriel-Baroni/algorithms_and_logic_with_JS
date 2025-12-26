const frm = document.querySelector("form")
const respErros=  document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const Chances = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero== sorteado){
        respDica.innerText = `Parabéns, número sorteado ${numero}`
        frm.btSubmit.className= "oculta"
        frm.btNovo.className= "exibe"
    }else{
        if(erros.includes(numero)){
            alert(`Você já apostou no número ${numero}`)
        }else{
            erros.push(numero)
            const numErros = erros.length
            const numChances = Chances - numErros
            respErros.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChances
            if(numChances == 0) {
                alert("Suas chances acabaram")
                frm.btSubmit.disable = false
                frm.brNovo.className = "oculta"
                respDica.innerText=`Game over, número sorteado ${numero}`
            } else{
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Tende um número ${dica}`
            }
        }
    }
    frm.inNumero.value=""
    frm.inNumero.focus()
}) 

frm.btNovo.addEventListener("click", () =>{
    location.reload()
})  
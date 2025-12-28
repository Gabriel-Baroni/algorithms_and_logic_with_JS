const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const numeros = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = frm.inNumero.value
if (numeros.includes(numero)) {
        alert("Você já adicionou esse número")
        frm.inNumero.value = ""
        frm.inNumero.focus()
        return 
    }
    numeros.push(numero)
    const resposta = numeros.reduce((acumulador, num)=> acumulador += ` ${num},`)
    resp1.innerText= resposta
    frm.inNumero.value=""
    frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () =>{
    const numerosOrdenados = numeros.slice()
    numerosOrdenados.sort((a,b) => a -b)
    estaEmOrdem = true
    for (let i=0; i < numeros.length; i++){
        if(numeros[i] != numerosOrdenados[i]){
            estaEmOrdem= false
            break
        }
    }

    if(estaEmOrdem){
        resp2.innerText="Os números estão em ordem"
    } else {
        resp2.innerText="Os números não estão em ordem"
    }


})
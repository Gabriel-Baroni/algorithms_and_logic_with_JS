const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const calcularDesconsto = (valor, taxa) =>{
    const desconto = valor * taxa
    const pagar = valor - desconto
    return {pagar, desconto}

}

frm.rbNao.addEventListener("click", () =>{
    frm.inConvenio.style.display = "none"
})

frm.rbSim.addEventListener("click", () =>{
    frm.inConvenio.style.display = "inline"
})

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let taxa
    if(rbNao.checked){
        taxa = 0.1
    } else {
        const convenio = frm.inConvenio.value
        taxa = convenio == "Amigo" ? 0.2 : 0.5
    }
    const resultado = calcularDesconsto(valor, taxa)
    resp1.innerText = `O desconto é: ${resultado.desconto}`
    resp2.innerText = `O valor a pagar é: ${resultado.pagar}`

})

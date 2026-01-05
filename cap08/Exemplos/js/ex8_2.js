const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificar(ano)
    const entrada = calcular(preco, classificacao)
    const parcela = (preco - entrada) / 10

    resp1.innerText = modelo + " - " + classificacao
    resp2.innerText = `Entrada R$: ${entrada}`
    resp3.innerText = `10X de R$: ${parcela.toFixed(2)}`
})

const classificar = (ano) => {
    const anoAtual = new Date().getFullYear()
    let classIf 
    if( ano == anoAtual){
        classIf = "Novo"
    } else if (ano == anoAtual -1 || ano == anoAtual -2){
        classIf = "Seminovo"
    } else {
        classIf = "Usado"
    }
    return classIf
}

const calcular = (preco, classificacao) => 
    classificacao == "Novo" ? preco * 0.5 : preco * 0.3

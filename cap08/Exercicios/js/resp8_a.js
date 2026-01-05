const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

const retornarTracos = (nome) =>{
    let tracos =""
    for(const char of nome){
        if(char == " "){
            tracos += " "
        } else {
            tracos += "-"
        }
    }
    return tracos
}

const categorizar = (idade) =>{
    let categ
    if(idade <= 12){
        categ = "Infantil"
    } else if (13<= idade && idade < 18) {
        categ = "Juvenil"
    } else if (idade >= 18) {
        categ = "Adulto"
    }
    return categ
}

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inNumero.value)
    const tracos = retornarTracos(nome)
    const categ = categorizar(idade)

    resp1.innerText= nome
    resp2.innerText = tracos
    resp3.innerText= `Categoria: ${categ}`
})
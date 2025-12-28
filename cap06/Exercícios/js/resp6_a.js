const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const clubes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const clube = frm.inClube.value
    clubes.push(clube)
    frm.inClube.value = ""
})

frm.btListar.addEventListener("click", () =>{
    if(clubes.length == 0){
        alert("Não há clubes cadastrados")
        return
    }
    lista =""
    clubes.forEach((clube) =>{
        lista+= (`${clube}\n`)
    })
    resp.innerText = lista
})

frm.btMostrar.addEventListener("click", () => {
    if(clubes.length % 2 != 0){
        alert("O número de clubes é ímpar")
        return
    }
    tabela =""
    total = clubes.length
    for (let i = 0; i < total/2; i++) {
        const primeiro = clubes[i]
        const ultimo = clubes[total - 1 - i]
        tabela += `${primeiro} x ${ultimo}\n`
    }
    resp.innerText=tabela
})
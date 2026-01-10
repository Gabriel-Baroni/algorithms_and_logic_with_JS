const frm = document.querySelector("form")
const velas = document.querySelector("#velas")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const idade = frm.inIdade.value
    if(isNaN(idade)){
        alert("Idade Inválida")
        return
    }
    criarNumero(idade)
    
})

criarNumero = (idade) =>{
    const tam = idade.length
    partes = [...idade]
    if(tam == 1){
        const novaDezena= document.createElement("img")
        const novaUnidade = document.createElement("img")
        novaDezena.src = "img/0.jpg"
        novaUnidade.src = "img/" + idade + ".jpg"
        velas.appendChild(novaDezena)
        velas.appendChild(novaUnidade)
    } else if (tam == 2){
        const novaDezena= document.createElement("img")
        const novaUnidade = document.createElement("img")
        novaDezena.src = "img/" + partes[0] + ".jpg"
        novaUnidade.src = "img/" + partes[1] + ".jpg"
        velas.appendChild(novaDezena)
        velas.appendChild(novaUnidade)
    } else if (tam == 3) {
        const novaCentena = document.createElement("img")
        const novaDezena= document.createElement("img")
        const novaUnidade = document.createElement("img")
        novaCentena.src = "img/" + partes[0] + ".jpg"
        novaDezena.src = "img/" + partes[1] + ".jpg"
        novaUnidade.src = "img/" + partes[2] + ".jpg"
        velas.appendChild(novaCentena)
        velas.appendChild(novaDezena)
        velas.appendChild(novaUnidade)
    } else {
        alert("Idade Inválida")
        return
    }

}

frm.btNova.addEventListener("click", () => {
    if(confirm(`Confrima Exclusão das velas"?`)){
        const imgs = velas.querySelectorAll("img")
        imgs.forEach(img => velas.removeChild(img))
        frm.inIdade.value = ""
        frm.inIdade.focus()
    }
})
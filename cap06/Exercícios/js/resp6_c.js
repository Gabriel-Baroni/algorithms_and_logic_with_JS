const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const candidatos = []
linha=""
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const canditado = frm.inCandidato.value
    const acertos = frm.inAcertos.value
    candidatos.push({canditado, acertos})
    frm.inCandidato.value=""
    frm.inAcertos.value=""
    frm.inCandidato.focus()
})

frm.btListar.addEventListener("click", () =>{
    if(candidatos.length == 0){
        alert("Não há candidatos cadastrados")
        return
    }
    linha=""
    for (const pessoa of candidatos){
         linha+=(`${pessoa.canditado} - ${pessoa.acertos} acertos\n`)
    }
    resp.innerText= linha
})

frm.btApresentar.addEventListener("click", () =>{
    if(candidatos.length == 0){
        alert("Não há candidatos cadastrados")
        return
    }
    const numMin= Number(prompt("Digite o número mímino de acertos"))
    const resultado = candidatos
            .filter(p => p.acertos >= numMin)            
            .sort((a, b) => b.acertos - a.acertos)         
            .map(p => `${p.canditado} - ${p.acertos} acertos`) 
            .join("\n");                          

    resp.innerText = resultado || "Nenhum aprovado.";
})
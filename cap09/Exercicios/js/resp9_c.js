const frm = document.querySelector("form")
const resp1 = document.querySelector("h3") 
const resp2 = document.querySelector("pre") 


const atualizarPendentes = () => {
    const dados = localStorage.getItem("Serviços")
    if (dados) {
        const partes = dados.split(";").filter(item => item !== "")
        resp1.innerText = partes.length
    } else {
        resp1.innerText = "0"
    }
}


window.addEventListener("load", atualizarPendentes)

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const servico = frm.inServico.value


    let lista = localStorage.getItem("Serviços") || ""
    

    lista += servico + ";"
    localStorage.setItem("Serviços", lista)
    
    atualizarPendentes()
    frm.reset()
    frm.inServico.focus()
})

frm.btExecutar.addEventListener("click", () => {
    const dados = localStorage.getItem("Serviços")
    
    if (!dados) {
        alert("Nenhum serviço para executar")
        resp2.innerText = ""
        return
    }


    let partes = dados.split(";").filter(item => item !== "")

    if (partes.length > 0) {

        const emExecucao = partes.shift() 
        resp2.innerText = "Em execução: " + emExecucao
        

        localStorage.setItem("Serviços", partes.join(";") + (partes.length > 0 ? ";" : ""))
        atualizarPendentes()
    } else {
        alert("Nenhum serviço para executar")
        localStorage.removeItem("Serviços")
        resp2.innerText = ""
    }
})
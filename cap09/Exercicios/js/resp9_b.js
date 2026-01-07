const frm = document.querySelector("form")
const resp = document.querySelector("h3")

let lista = localStorage.getItem("Lista") || ""
resp.innerText = lista
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const produto = frm.inProduto.value
    lista += produto + "\n"
    localStorage.setItem("Lista", lista)
    resp.innerText = lista
})

frm.btLimpar.addEventListener("click", () => {
    if(!localStorage.getItem("Lista")){
        alert("Não há itens cadastrados")
    } else {
        localStorage.removeItem("Lista")
        resp.innerText = ""
    }
})
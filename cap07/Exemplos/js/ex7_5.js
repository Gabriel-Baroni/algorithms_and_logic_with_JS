const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inFuncionario.value
    const partes = nome.split(" ")
    let email = ""
    const tam = partes.length

    for(let i = 0; i < tam - 1; i++ ){
        email+= partes[i].charAt(0)
    }
    email+= partes[tam-1] + "@empresa.com.br"
    resp.innerText = `Email: ${email.toLowerCase()}`
})
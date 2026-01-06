const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const validarNome = (nome) =>{
    const partes = nome.split(" ")
    if (partes.length < 3){
        return false
    } else {
        return true
    }
}

const obterSobrenome = (nome) =>{
    const partes = nome.split(" ")
    const ultimo = partes[partes.length-1]
    return ultimo.toLowerCase()
}

const contarVogais = (nome) =>{
    let vog = 0
    for(let i = 0; i <= nome.length; i++){
        nome.toLowerCase()
        if (nome.charAt(i) == "a" || nome.charAt(i) == "e" || nome.charAt(i) == "i" || nome.charAt(i) == "o" || nome.charAt(i) == "u" ){
            vog++
        }
    }
    return vog

}

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    if (validarNome(nome)){
        const sobrenome = obterSobrenome(nome)
        const vogais = contarVogais(nome)
        senha = `${sobrenome}${vogais}`
        resp.innerText = senha
    } else {
        resp.innerText = "Insira o nome completo"
    }

})
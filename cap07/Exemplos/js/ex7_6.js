const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const senha = frm.inSenha.value
    const erros = []

    if(senha.length <8 || senha.length > 15){
        erros.push("Senha deve possuir entre 8 e 15 caracteres")
    }

    if(senha.match(/[0-9]/g) == null){
        erros.push("Senha deve possuir números (mínimo 1)")
    }

    if(!senha.match(/[a-z]/g)){
        erros.push("Senha deve possuir letras minúsculas (mínimo 1)")
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1 ){
        erros.push("Senha deve possuir letras maiúsculas (mínimo 2)")
    }

    
    if(!senha.match(/[\W|_]/g)){
        erros.push("Senha deve possuir símbolos (mínimo 1)")
    }

    if(erros.length == 0 ){
        resp.innerText = "Senha válida"
    } else {
        resp.innerText = `Erros ... A senha deve: ${erros.join(", " )}`
    }

})
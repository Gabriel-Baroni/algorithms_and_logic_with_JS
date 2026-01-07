const resp = document.querySelector("h3")
const verificar = () =>{
    let cont = Number(localStorage.getItem("Vezes")) || 0

    cont ++
    if(cont == 1){
        resp.innerText = "Bem-Vindo, essa é sua primeira vez acessando o site"
    } else {
        resp.innerText = `Que bom que você voltou, essa é sua visita  número ${cont}`
    }
    localStorage.setItem("Vezes", cont)

}

window.addEventListener("load", verificar)

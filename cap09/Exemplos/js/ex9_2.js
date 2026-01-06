const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")
const inRadios = document.querySelectorAll("input")

const trocarClube = () =>{
    const clubes = ["Brasil", "Pelotas", "Palmeiras"]
    let selecao
    for (let i = 0; i < inRadios.length; i++){
        if(inRadios[i].checked){
            selecao = i
            break
        }
    }
    if(selecao <= 2){
        divTitulo.className = `row cores-${clubes[selecao]}`
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid"
        imClube.alt = `Simbolo do ${clubes[selecao]}`
        localStorage.setItem("clube", clubes[selecao]) 
    } else {
        divTitulo.className = "row"
        imClube.className = "d-none"
        imClube.alt = ""
        localStorage.removeItem("clube")
    }
}


const verificarClube = () =>{
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube")
        if (clube == "Brasil"){
            inRadios[0].checked = true
        } else if (clube =="Pelotas") {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked= true
        }
        trocarClube()
    }
}

for (const inRadio of inRadios){
    inRadio.addEventListener("change", trocarClube)
}



window.addEventListener("load", verificarClube)
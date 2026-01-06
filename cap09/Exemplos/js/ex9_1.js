const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")

const trocarClube = () =>{
    let clube 
    if(frm.rbBrasil.checked){
        clube="Brasil"
    } else if (frm.rbPelotas.checked) {
        clube="Pelotas"
    } else {
        clube = "Palmeiras"
    }
    divTitulo.className = `row cores-${clube}`

    imClube.src = `img/${clube.toLocaleLowerCase()}.png`
    imClube.className = "img-fluid"
    imClube.alt = `Simbolo do ${clube}`
    localStorage.setItem("clube", clube) 
}

frm.rbBrasil.addEventListener("change" , trocarClube)
frm.rbPelotas.addEventListener("change" , trocarClube)
frm.rbPalmeiras.addEventListener("change" , trocarClube)

const verificarClube = () =>{
    if(localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube")
        if (clube == "Brasil"){
            frm.rbBrasil.checked = true
        } else if (clube =="Pelotas") {
            frm.rbPelotas.checked = true
        } else {
            frm.rbPalmeiras.checked = true
        }
        trocarClube()
    }
}

window.addEventListener("load", verificarClube)
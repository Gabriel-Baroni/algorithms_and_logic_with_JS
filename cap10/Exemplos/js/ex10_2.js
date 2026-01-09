const frm = document.querySelector("form")
const dvMoedas = document.querySelector("#dvMoedas")

window.addEventListener("load", () =>{
    const num1_00 = Math.ceil(Math.random()*5)
    const num0_50 = Math.ceil(Math.random()*5)
    const num0_25 = Math.ceil(Math.random()*5)
    const num0_10 = Math.ceil(Math.random()*5)

    criarMoedas(num1_00, "1.jpg", "alt1_00", "moeda1-00")
    criarMoedas(num0_50, "50.jpg", "alt0_50", "moeda0-50")
    criarMoedas(num0_25, "25.jpg", "alt0_25", "moeda0-25")
    criarMoedas(num0_10, "10.jpg", "alt0_10", "moeda0-10")
})

const criarMoedas = (num, nome, alt, classe) =>{
    for (let i = 0; i < num; i++){
        const novaMoeda = document.createElement("img")
        novaMoeda.src="img/" + nome
        novaMoeda.textAlt = alt
        novaMoeda.className= classe
        dvMoedas.appendChild(novaMoeda)
    }
    const br = document.createElement("br")
    dvMoedas.appendChild(br)
} 

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const soma = Number(frm.inSoma.value)
    const moedas = dvMoedas.querySelectorAll("img")
    let totalMoedas = 0

    for  (const moeda of moedas){
        if(moeda.className == "moeda1-00"){
            totalMoedas += 1 
        } else if (moeda.className == "moeda0-50"){
            totalMoedas +=0.5
        } else if (moeda.className =="moeda0-25"){
            totalMoedas += 0.25
        } else {
            totalMoedas += 0.1
        }
    }
    const div = document.createElement("div")
    const h3 = document.createElement("h3")

    let mensagem

    if(soma== totalMoedas.toFixed(2)){
        div.className = "alert alert-success"
        mensagem = "Parabéns!! Você Acertou!"
    } else{
        div.className = "alert alert-danger"
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`
    }
    const texto = document.createTextNode(mensagem)
    h3.appendChild(texto)
    div.appendChild(h3)
    dvMoedas.appendChild(div)
    frm.submit.disabled = true
})

frm.addEventListener("reset", () =>{
    window.location.reload()
})
const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const modelo= frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})
    frm.inModelo.value=""
    frm.inPreco.value=""
    frm.inModelo.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não há carros na lista")
        return
    }
    const lista = carros.reduce((acumulador, carro)=>
    acumulador+=carro.modelo + " -R$:" + carro.preco.toFixed(2)+"\n", "")
    resp.innerText=lista
})

frm.btFiltrar.addEventListener("click", () =>{
    const maximo = Number(prompt("Digite o valor máximo que quer pagar no carro: "))
    if(maximo == 0 || maximo == NaN){
        alert("Insira um valor válido")
    }
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length ==0){
        alert("Não há carros nessa afixa de preço")
    }
    let lista =""
    for(const carro of carrosFilter){
        lista+= `${carro.modelo} - R$ ${carro.preco.toFixed(2)}`
    }
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)} ${lista}`
})

frm.btSimular.addEventListener("click", () =>{
    const desconto= Number(prompt("Digite o desconto a ser aplicado:"))
    if(desconto==0 || isNaN(desconto)){
        return
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco*desconto/100)
    }))
    let lista=""
    for(const carro of carrosDesc){
        lista+= `${carro.modelo} - R$ ${carro.preco.toFixed(2)}`
    }
    resp.innerText= `Carros com desconto ${lista}`
})
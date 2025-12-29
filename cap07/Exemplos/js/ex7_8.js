const frm = document.querySelector("form")

const taxaMulta = 2/100
const taxaJuros = 0.33/100

frm.addEventListener("submit", (e) =>{
    e.preventDefault() 
    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date() 
    const vecto = new Date()

    const partes = dataVenc.split("-")
    vecto.setDate(Number(partes[2]))
    vecto.setMonth(Number(partes[1]) -1)
    vecto.setFullYear(Number(partes[0]))

    const atraso = hoje - vecto 
    let multa = 0
    let juros = 0

    if(atraso >0){
        const dias = atraso / 86400000
        multa = valor * taxaMulta
        juros = valor *taxaJuros *dias
    }
    const total = valor + multa + juros
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})
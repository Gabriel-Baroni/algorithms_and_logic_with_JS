const frm = document.querySelector("form");
const RespNome = document.querySelector("span");
const RespLista = document.querySelector("pre");

const pacientes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista=""
    for (let i=0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    RespLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
});
frm.btUrgencia.addEventListener("click", () =>{
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em carater de urgência")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista=""
    pacientes.forEach((paciente, i) => (lista+= `${i+ 1} ${paciente}\n`))
    RespLista.innerText = lista
    frm.inPaciente.value=""
    frm.inPaciente.focus()
}); 

frm.btAtender.addEventListener("click", () =>{
    if(pacientes.length == 0){
        alert("Não há pacientes na listade espera")
        frm.inPaciente.focus()
    }
    const atender= pacientes.shift()
    RespNome.innerText=atender 
    let lista=""
    pacientes.forEach((paciente, i ) => (lista+= `${i+1} ${paciente}\n`))
    RespLista.innerText = lista

})


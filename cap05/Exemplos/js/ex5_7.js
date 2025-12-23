const frm = document.querySelector("form");
const resp = document.querySelector("#outResp")

frm.addEventListener("click", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    let estrelas = "";
    for (let i = 1; i<=num; i++){
        if (i % 2 != 0){
            estrelas += "*"
        } else {
            estrelas += "-"
        }
    }
    resp.innerText = estrelas
});
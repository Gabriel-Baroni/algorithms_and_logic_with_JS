const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
let resposta = ""
let numContas = 0 
let valTotal = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const descr = frm.inDescricao.value;
    const val = Number(frm.inValor.value);
    numContas++;
    valTotal += val;
    resposta += `${descr} - R$ ${val.toFixed(2)}\n`;
    resp1.textContent = resposta;
    resp2.textContent = `Número de contas: ${numContas}\nValor total: R$ ${valTotal.toFixed(2)}`;
    frm.inDescricao.value = ""; 
    frm.inValor.value = "";
    frm.inDescricao.focus();
});

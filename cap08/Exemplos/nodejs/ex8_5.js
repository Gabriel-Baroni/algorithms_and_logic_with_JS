const prompt = require("prompt-sync")()

const vinhos = []

function titulo(texto){
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}


function incluir() {
    titulo("===< Inclusão de Vinhos >===")
    const marca = prompt("Digite a marca: ")
    const tipo = prompt("Digite o tipo: ")
    const preco = Number(prompt("Digite o preço: "))
    vinhos.push({marca, tipo, preco})
    console.log("Ok! Vinho cadastrado com sucesso")
}

function listar() {
    titulo("===< Listar Vinhos >===")
    for (const vinho of vinhos){
        console.log(`Marca: ${vinho.marca}, Tipo:${vinho.tipo} e Preço: ${vinho.preco.toFixed(2)}`)
    }
    
}

function pesquisar(){
    titulo("===< Pesquisar Por tipo >===")
    const pesq = prompt("Digite o tipo:")

    let contador = 0
    for(const vinho of vinhos){
        if(vinho.tipo.toUpperCase().includes(pesq.toUpperCase())){
            console.log(`Marca: ${vinho.marca}, Tipo:${vinho.tipo} e Preço: ${vinho.preco.toFixed(2)}`)
            contador ++
        }
    }
    if (contador ==0){
        console.log("Nenhum vinho cadastrado desse tipo")
    }
}

function calcularMedia(){
    titulo("===< Calcular Média >===")
    const num = vinhos.length
    if(num == 0){
        console.log("Não há vinhos cadastrados")
        return
    }
    let total = 0
    for (const vinho of vinhos){
        total+= vinho.preco
    }
    const media = total/num
    const vinhos2 = [...vinhos]
    vinhos2.sort((a, b) => a.preco - b.preco)
    const menor = vinhos2[0]
    const maior = vinhos2[num-1]

    console.log(`Preço Médio ${media.toFixed(2)}`)
    console.log(`Menor valor ${menor.preco.toFixed(2)}`)
    console.log(`Maiorvalor ${maior.preco.toFixed(2)}`)
}

do{
    titulo("===< Cadastro de Vinhos ===")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa Por tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")
    const opcao = Number(prompt("Digite sua opção: "))
    if(opcao ==1){
        incluir()
    } else if (opcao == 2){
        listar()
    } else if (opcao == 3){
        pesquisar()
    } else if (opcao == 4){
        calcularMedia()
    } else {
        break
    }
} while (true)
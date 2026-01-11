const express = require('express')
const app = express()
const port = 3001

// MIddelewares
app.use(express.json())

const log = (req, res, next) =>{
    console.log(`................Acessado em ${new Date()}`)
    next()

}

app.get("/", (req, res) =>{
    res.send("Olá... Bem-vindo")
})

app.get("/cap12", (req, res) =>{
    res.send(`<h2>Capitulo 12: Introdução ao Express<h2>`)
})

app.get("/trasfere", log, (req, res) =>{
    res.send("Ok! Valor trasferido")
})


app.post("/filmes", (req, res) =>{
    const {titulo, genero} = req.body
    res.send(`Filme: ${titulo} - Gênero ${genero}, recebido...`)
})

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})

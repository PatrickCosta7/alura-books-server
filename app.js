const express = require("express");
const rotaLivros = require("./rotas/livro")

const app = express();

app.use('/Livros', rotaLivros)

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})

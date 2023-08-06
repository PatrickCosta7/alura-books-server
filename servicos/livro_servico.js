const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrado = livros.filter( livro => livro.id === id )[0] //indice aqui é para indicar que está sendo puxado um elemento só
    return livrosFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
    
}

function modificarLivro(modificacoes) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = {
    getTodosLivros,
    getLivroPorId, 
    insereLivro
}

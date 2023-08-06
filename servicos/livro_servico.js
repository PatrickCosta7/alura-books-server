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

function modificarLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes} //quando se tem dois spreads, o js faz uma comparação dos elementos e substitui os que está diferente
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))

}

module.exports = {
    getTodosLivros,
    getLivroPorId, 
    insereLivro,
    modificarLivro,
    deletarLivroPorId
}

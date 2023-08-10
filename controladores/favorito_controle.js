const { getTodosFavoritos, deletaFavoritoPorId, insereFavorito } = require("../controladores/livro_controle")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const livroNovo = req.body 

        if( req.body.nome ) {
            insereFavorito(livroNovo)
            res.status(201)
            res.send("Livros inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }

        
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getFavoritos,
}

const { Router } = require("express") //express é um framework node que fornece recursos para aplicativos web
const { getLivros, getLivro, postLivro } = require("../controladores/livro_controle")

const router = Router()

//req e res sõo parâmetros do próprio Node, usados para fazer uma request e um send
router.get('/', getLivros)

router.get('/:id', getLivro)

router.post('/', postLivro)  

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
}) 

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
}) 

module.exports = router

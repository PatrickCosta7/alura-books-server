const fs = require("fs")  //fs (file system) é um modulo que permite interação com arquivos (https://nodejs.org/api/fs.html)

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")) //JSON.parse() é JS e passa de JSON p/string
const novoDado = { "id": "3", "nome": "Livro fantástico" }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])) //JSON.stringify() é JS e passa String p/JSON

console.log(JSON.parse(fs.readFileSync("livros.json")))


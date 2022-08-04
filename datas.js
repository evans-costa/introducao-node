/* 
- Usamos a bilbioteca nativa 'fs' para criar arquivos e modificá-los

- No exemplo abaixo, usamos 'writeFile' para criar um arquivo .txt e 
o 'rename' para renomear um arquivo previamente criado. 
*/

const fs = require ('fs')


fs.writeFile('mensagem.txt', "Consegui usar a biblioteca fs!", "utf-8", err => {
    if (err) throw err;
})

fs.rename('mensagem.txt', 'renomeandomensagem.txt', err => {
    if (err) throw err;
    console.log("Consegui renomear!")
})
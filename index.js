//importando um módulo 'express' , que é um framework web para node.js
const express = require('express');

//cria uma aplicação Expres
const app = express();

//Define a porta na qual o servidor vai escutar as requisições
const port = 3000;

//define a rota para a raiz ('/') da aplicação.
// Quando o servidor recebe uma requisição GET na raiz, ele envia a resposta 'Hello world!'
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Inicia oservidor e faz com que ele escote na porta especificada.
//Exibe uma mensagem no console indicando que o servidor esta rodando.
app.listen(port, () => {
    console.log('servidor rodando em http://localhost:${port}');
});
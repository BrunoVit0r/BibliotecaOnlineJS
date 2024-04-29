const express = require('express');
const { obterLivros, obterLivroPorId } = require('./controladores/livros');

const rotas = express();

rotas.get('/livros', obterLivros);
rotas.get('/livros/:id', obterLivroPorId);


module.exports = rotas;
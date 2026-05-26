// const acoes = require('./cozinha/acoesCozinhar')
// const { alimentos } = require('./cozinha/alimentos')

// console.log(acoes.cozinhar(alimentos[5]))

const cozinha = require('./cozinha')
// console.log(cozinha)

const receita = require('./receita')

const comer = require('./refeicao')('Almoço')
comer('Arroz', ' Jeijão')

const comer2 = require('./refeicao')('Janta')
comer2('Arroz', ' Jeijão')






// console.log(receita(cozinha.alimentos.alimentos, cozinha.cortar, cozinha.assar))


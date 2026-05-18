// EX 01
const mensagem = require('./mensagem')
console.log(mensagem('romulo'))

// EX 02
const conversor = require('./conversor')
console.log(conversor.paraDolar(100))
console.log(conversor.paraReal(100))

// EX 03
const config = require('./config')
console.log(Object.keys(config))

// EX 04
const funcao = require('./funcoes')
console.log(funcao.resultado)
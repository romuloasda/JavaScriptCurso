const valida = require('./validador')
const status = require('./estatus')

let midade = 20
let print = status(valida(midade))

console.log(print)
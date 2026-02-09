//pessoa -> 123
const pessoa = { nome: 'Romulo' }
pessoa.idade = 25

//pessoa -> 456 -> 123
//pessoa = { nome: 'Maria' }

Object.freeze(pessoa)

pessoa.idade = 26
console.log(pessoa)


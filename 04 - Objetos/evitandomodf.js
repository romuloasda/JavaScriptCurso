//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Caneta',
    preco: 1.99,
    estoque: 100
})

console.log(Object.isExtensible(produto))

produto.valor = 2.99
console.log(produto)

//Object.seal
const pessoa = {
    nome: 'Ana',
    idade: 29
}

Object.seal(pessoa)

pessoa.nome = 'Carla'
console.log(pessoa)

//Object.freeze
const pessoa2 = {
    nome: 'Ana',
    idade: 29
}

Object.freeze(pessoa2)

pessoa2.nome = 'Carla'
console.log(pessoa2)

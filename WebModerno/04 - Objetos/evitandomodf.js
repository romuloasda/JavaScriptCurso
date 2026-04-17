//Object.preventExtensions
const produto = Object.preventExtensions({ //nao consigo add mais nenhum atributo mais sim excluir
    nome: 'Caneta',
    preco: 1.99,
    estoque: 100
})

console.log(Object.isExtensible(produto))

produto.valor = 2.99
console.log(produto)

//Object.seal 'De SELAR, Nao consegue add nem excluir ATRIBUTO '
const pessoa = {
    nome: 'Ana',
    idade: 21
}

Object.seal(pessoa)

pessoa.nome = 'Carla'
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze
const pessoa2 = {
    nome: 'Ana',
    idade: 29
}

Object.freeze(pessoa2)

pessoa2.nome = 'Carla'
console.log(pessoa2)

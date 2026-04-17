// atribuicao
const a = b = c = 10
console.log(a, b, c)

// atribuicao via desestruturacao
const pessoa = {
    nome: 'Romildo',
    idade: 40,
    peso: 80
}
console.log(pessoa)

// atribuicao via desestruturacao
const { nome, idade, peso } = pessoa
console.log(nome, idade, peso)
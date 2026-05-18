//novo recurso do ES2015
const pessoa = {
    nome: 'Romildo',
    idade: 40,
    peso: 80
}

const { nome, idade, } = pessoa
console.log(pessoa) //  { nome: 'Romildo', idade: 40, peso: 80 } 

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)


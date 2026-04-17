//colecao dinamica de pares chave/valor
const produto = new Object
produto['marca do produto'] = 'Generica'
produto.nome = 'Cadeira'
produto.preco = 220

console.log(produto)

//pode-se deletar propriedades de um objeto
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    nome: 'Uno',
    preco: 45000,
    seguro: 1200,
    condutores: {
        nome: 'Romulo',
        idade: 25
    }
}
carro.ano = 2022

console.log(carro)

//pode-se deletar propriedades de um objeto
delete carro.ano

console.log(carro)

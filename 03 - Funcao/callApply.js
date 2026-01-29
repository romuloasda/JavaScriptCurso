function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Produto 1',
    preco: 100,
    desconto: 0.15
}

console.log(getPreco.call(produto))
console.log(getPreco.apply(produto))
console.log(getPreco.call(produto, 0.1, 'R$'))
console.log(getPreco.apply(produto, [0.1, 'R$']))


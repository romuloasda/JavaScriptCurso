Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.49}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Caneta", "preco": 1.20}',
    '{"nome": "Mochila", "preco": 120.00}'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPrecos = produto => produto.preco

const precos = carrinho.map2(paraObjeto).map2(apenasPrecos)

console.log(precos)
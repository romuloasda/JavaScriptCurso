const carrinho = [
    '{"nome": "Borracha", "preco": 3.49}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Caneta", "preco": 1.20}',
    '{"nome": "Mochila", "preco": 120.00}'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const precos = carrinho.map(paraObjeto)

console.log(precos)
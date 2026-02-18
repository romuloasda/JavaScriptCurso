const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Cadeira de Escritório', preco: 499, fragil: false }
]

console.log(produtos.filter(function (p) {
    return p.preco < 500
}))

console.log(produtos.filter(function (p) {
    return p.fragil
}))

console.log(produtos.filter(function (p) {
    return false
}))
const filhas = ['Valesca', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']

const todos = filhas.concat(filhos, 'Bia', 'Rafaela')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))

// concat não modifica os arrays originais
console.log(filhas)
console.log(filhos)

// concat pode ser usado com o operador spread
console.log([...filhas, ...filhos])
const fila = ['João', 'Maria', 'José']
fila.shift()
console.log(fila)

const frutas = ['Maçã', 'Banana', 'Cachorro', 'Morango']
frutas.splice(2, 1, 'Uva')
console.log(frutas)

const numero = []
numero[0] = 10
console.log(numero)

numero[5] = 50
console.log(numero[2])
console.log(numero.length)

const estoque = ['Monitor', 'Teclado', 'Mouse']

estoque.push('Cadeira Gamer')
console.log(estoque)

estoque.unshift('Fone de Ouvido')
console.log(estoque)

estoque.splice(3, 1)
console.log(estoque)

const grid = ['Hamilton', 'Verstappen', 'Leclerc', 'Perez', 'Norris']

grid.splice(3,1)
console.log(grid)

grid.shift()
grid.push('Hamilton')
console.log(grid)

grid.forEach(function (nome, indice) {
	console.log(`${indice + 1}. ${nome}`)
})

const podio = grid.slice(0, 2)
console.log(podio)

podio.forEach(function(nome, indice) {
	console.log(`${indice + 1} Lugar ${nome}`)
})

const convidados = ['Carlos', 'Denis', 'Ana', 'Bia']

const VIPs = ['Diretor', 'Presidente']

const listaFinal = convidados.concat(VIPs)
listaFinal.sort()

console.log(listaFinal.indexOf('Carlos'))

listaFinal.splice(2, 1)

listaFinal.forEach(function (nome, indice) {
	console.log(`${indice + 1}. ${nome}`)
})
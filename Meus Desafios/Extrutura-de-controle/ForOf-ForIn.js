const frutas = ['Maçã', 'Banana', 'Pera']

// Usando o for...in (foco no índice)
for (let indice in frutas) {
	console.log(indice) // Imprime: 0, 1, 2
	// Se quiser pegar o valor com ele, precisa fazer: frutas[indice]
}

// Usando o for...of (foco no valor direto)
for (let fruta of frutas) {
	console.log(fruta) // Imprime: 'Maçã', 'Banana', 'Pera'
}

const produtos = ['Teclado', 'Mouse', 'Monitor', 'Cadeira']

for (let i in produtos) {
	console.log(`O produto está guardado na posição: ${i}`)
}

const mochila = ['Caderno', 'Caneta', 'Notebook', 'Carregador']

for (let i of mochila) {
	console.log(`Item retirado da mochila: ${i}`)
}

const precos = [10, 20, 30, 40]

let somarIndices = 0

for (let i of precos) {
	somarIndices += i

}

let somarInd = 0

for (let i in precos) {
	somarInd += parseInt(i)
}

console.log(somarIndices, somarInd)


const itensRaros = ['Espada de Fogo',
	'Poção de Vida',
	'Escudo de Gelo',
	'Poção de Mana',
	'Anel Mágico']

for (let i of itensRaros) {
	if (i.includes('Poção')) {
		console.log(`Item consumível encontrado: ${i}`)
	} else {
		console.log(i)
	}
}

for (let i in itensRaros) {
	if (itensRaros[i].includes('Anel Mágico')) {
		console.log(`O Anel Mágico está equipado na fenda número: ${i}`)
	}
}

const times = ['Botafogo', 'Flamengo', 'Palmeiras', 'Fortaleza']

for (let i = 0; i < times.length; i++) {
	console.log(`Posição ${i}: ${times[i]}`)
}

const letras = ['A', 'B', 'C', 'D', 'E']
for (let i = letras.length - 1; i >= 0; i--) {
	console.log(letras[i])
}

const valores = [2, 4, 6, 8]
for (let i = 0; i < valores.length; i++) {
	valores[i] = valores[i] * 2
}

console.log(valores)
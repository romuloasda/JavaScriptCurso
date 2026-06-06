const alimentos = ['arroz', 'feijao', 'farinha', 'carne', 'batata']
const comida = ['banana']

// Adiciona elemento ao final
alimentos.push('final')
console.log(alimentos.toString())

console.log(alimentos.join('-'.repeat(2)))

const codigo = "1";
console.log(codigo.padEnd(5, "0"))

// Add elemento ao inicio e desloca para posição abaixo
alimentos.unshift('inicio')
console.log(alimentos)

// Remove ultimo elemento do vetor
alimentos.pop('final')
console.log(alimentos)

// Remove primeiro elemento e desloca para posição a cima
alimentos.shift()
console.log(alimentos)

const alimentoSelecionado = alimentos.splice(2)
console.log(alimentoSelecionado)

const alimentoSelecionado2 = alimentos.slice(2)
console.log(alimentoSelecionado2)


const idade = [5, 6, 8, 3, 6, 9]
console.log(idade.indexOf(6)) //Quer dizer que o 6 ta na posicao 1
console.log(idade.lastIndexOf(6)) // Quer dizer que o 6 ta na posicao 4
console.log(idade.indexOf(7))
console.log(idade.includes(3))

const nomes = ['romulo', 'renata', 'claudino', 'arthur']

const sortear = function () {
	const nomeEscolhido = nomes[Math.floor(Math.random() * nomes.length)]
	return nomeEscolhido
}

console.log(sortear())

console.log(Math.floor(Math.random() * 10 + 1))
const carrinho = [
	{ nome: 'Caneta', qtd: 10, preco: 7.99 },
	{ nome: 'impressora', qtd: 0, preco: 649.50 },
	{ nome: 'Cadeno', qtd: 4, preco: 27.10 },
	{ nome: 'Lapis', qtd: 3, preco: 5.82 },
	{ nome: 'Tesoura', qtd: 1, preco: 19.20 }
]

// Criando o proprio MAP
Array.prototype.meuMap = function (fn) {
	const novoArray = []
	for (let i = 0; i < this.length; i++) {
		const resultado = fn(this[i], i, this)
		novoArray.push(resultado)
	}
	return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getResultado = item => item.qtd * item.preco
console.log(carrinho.meuMap(getResultado))
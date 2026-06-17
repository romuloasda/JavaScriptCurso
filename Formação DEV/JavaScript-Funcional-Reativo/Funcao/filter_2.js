const carrinho = [
	{ nome: 'Caneta', qtd: 10, preco: 7.99, fragil: true },
	{ nome: 'impressora', qtd: 1, preco: 649.50, fragil: true },
	{ nome: 'Cadeno', qtd: 4, preco: 27.10, fragil: false },
	{ nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false },
	{ nome: 'Tesoura', qtd: 1, preco: 19.20, fragil: true }
]

Array.prototype.meuFilter = function (fn) {
	const novoArray = []

	for (let i = 0; i < this.length; i++) {
		if (fn(this[i], i, this)) {
			novoArray.push(this[i])
		}
	}

	return novoArray
}

const maiorQueZero = item => item.qtd > 0
const itensValido = carrinho
	.meuFilter(maiorQueZero)
	.map((e) => e.nome)

console.log(itensValido)
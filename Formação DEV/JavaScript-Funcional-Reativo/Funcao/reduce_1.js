const carrinho = [
	{ nome: 'Caneta', qtd: 10, preco: 7.99 },
	{ nome: 'impressora', qtd: 0, preco: 649.50 },
	{ nome: 'Cadeno', qtd: 4, preco: 27.10 },
	{ nome: 'Lapis', qtd: 3, preco: 5.82 },
	{ nome: 'Tesoura', qtd: 1, preco: 19.20 }
]

const getTotal = item => item.qtd * item.preco
const somar = (a, b) => {
	console.log(a, b)
	return a + b
}

const totais = carrinho.map(getTotal)
const totalGeral = totais.reduce(somar, 0)


console.log(totalGeral)
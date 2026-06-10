const carrinho = [
	{ nome: 'Caneta', qtd: 10, preco: 7.99 },
	{ nome: 'impressora', qtd: 0, preco: 649.50 },
	{ nome: 'Cadeno', qtd: 4, preco: 27.10 },
	{ nome: 'Lapis', qtd: 3, preco: 5.82 },
	{ nome: 'Tesoura', qtd: 1, preco: 19.20 }
]

const maiorQueZero = item => item.qtd > 0
const itensValido = carrinho
	.filter(maiorQueZero)
	.map((e) => e.nome)

console.log(itensValido)
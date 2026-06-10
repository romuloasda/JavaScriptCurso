const nums = [1, 2, 3, 4, 5]

const dobro = (n, i) => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
	{ nome: 'Caneta', qtd: 10, preco: 7.99 },
	{ nome: 'impressora', qtd: 0, preco: 649.50 },
	{ nome: 'Cadeno', qtd: 4, preco: 27.10 },
	{ nome: 'Lapis', qtd: 3, preco: 5.82 },
	{ nome: 'Tesoura', qtd: 1, preco: 19.20 }
]

const nomeCarrinho = carrinho.map((e) => e.nome)
console.log(nomeCarrinho)

const totalCarrinho = carrinho.map((e) => (e.preco * e.qtd))
console.log(totalCarrinho)
class Produto {
	constructor(nome, preco) {
		this.nome = nome
		this.preco = preco
	}

}

class Carrinho {
	constructor() {
		this.produtosNoCarrinho = []
	}

	addProduto = (prodNovo) => {
		this.produtosNoCarrinho.push(prodNovo)
	}

	calcTotal = () => {
		let total = this.produtosNoCarrinho
			.reduce((ac, valorAtual) => ac + valorAtual.preco, 0)
		return total
	}

	removerProduto = (nomeDoProduto) => {
		this.produtosNoCarrinho = this.produtosNoCarrinho.filter(
			produto => produto.preco !== nomeDoProduto.preco
		)
		console.log(`O produto ${nomeDoProduto.nome} foi removido.`)
	}

	aplicarCupom = (nomeDoCupom) => {
		if (nomeDoCupom === 'QUERO10') {
			let total = this.calcTotal() - (this.calcTotal() * 0.10)
			return `Valor Total Com Desconto ${total}`
		} else {
			return `Nome do Cupom Invalido!!!`
		}
	}
}

const prod1 = new Produto('Camisa', 50)
const prod2 = new Produto('Tenis', 100)
const prod3 = new Produto('Calça', 75)


const carrinho = new Carrinho()

carrinho.addProduto(prod1)
carrinho.addProduto(prod2)
carrinho.addProduto(prod3)
console.log(carrinho.calcTotal())

carrinho.removerProduto(prod1)
console.log(carrinho.aplicarCupom('QUERO10'))


console.log(carrinho.produtosNoCarrinho)


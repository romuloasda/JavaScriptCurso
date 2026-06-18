class ProdutoGame {
	constructor(nome, preco, qtd) {
		this.nome = nome
		this.preco = preco
		this.qtd = qtd

	}

}

const prod1 = new ProdutoGame('Controle', 500, 1)
console.log(prod1)

class Carrinho {
	constructor() {
		this.carrinho = []
	}

	addItem = (nomeItem) => {
		const intensExistentes = this.carrinho.find((produto) => produto === nomeItem)

		if (intensExistentes) {
			nomeItem.qtd += 1
			return
		} else {
			this.carrinho.push(nomeItem)
			return
		}
	}

	removerItem = (nomeItem) => {
		nomeItem.qtd -= 1
	}

}

const carrinho = new Carrinho
carrinho.addItem(prod1)
carrinho.addItem(prod1)
carrinho.addItem(prod1)
carrinho.removerItem(prod1)
console.log(carrinho)


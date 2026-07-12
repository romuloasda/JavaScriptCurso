class ProdutoGame {
	constructor(nome, preco, qtd) {
		this.nome = nome
		this.preco = preco
		this.qtd = qtd
	}

}

class Estoque {
	constructor() {
		this.listaJogos = []
	}

	addEstoque = (novoJogo) => {
		const jogoExistente = this.listaJogos.find(jogo => jogo.nome === novoJogo.nome)

		if (jogoExistente) {
			novoJogo.qtd += 1
			return;
		} else {
			this.listaJogos.push(novoJogo)
			return;
		}

	}

	calcTotal = () => {
		this.listaJogos.reduce((ac, atual) => {
			return ac + atual.qtd
		})
	}

}

const Spider = new ProdutoGame('Spider', 120, 1)

const estoque = new Estoque()
estoque.addEstoque(Spider)
estoque.addEstoque(Spider)

console.log(estoque)

const total = estoque.reduce((ac, total) => {
	let tota = ac + total.preco
	return tota
}, 0)

console.log(total)
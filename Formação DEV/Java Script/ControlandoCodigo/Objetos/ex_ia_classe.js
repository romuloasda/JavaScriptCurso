class Usuario {
	constructor(nome, sobrenome) {
		this.nome = nome
		this.sobrenome = sobrenome

	}

	get nomeCompleto() {
		return `${this.nome} ${this.sobrenome}`
	}

}

const user = new Usuario('Mario', 'Do Peixe')
console.log(user.nomeCompleto)

class Produto {
	constructor(nome, preco) {
		this.nome = nome
		this._preco = preco
	}

	get precoProduto() {
		return this._preco
	}

	set precoProduto(novoPreco) {
		if (novoPreco > 0) {
			this._preco = novoPreco
		} else {
			console.log(`Preço invalido`)
		}
	}
}

const Camisa = new Produto('Camisa', 50)
Camisa.precoProduto = -10
console.log(Camisa)
Camisa.precoProduto = 60
console.log(Camisa)



class controleVelocidade {
	constructor() {
		this._velocidade = 0
	}

	get velocidade() {
		return `Velocidade atual: ${this._velocidade} km/h `
	}

	set velocidade(valor) {
		if (valor >= 0 && valor <= 120) {
			this._velocidade = valor
		} else if (valor < 0) {
			this._velocidade = 0
		} else if (valor > 120) {
			this._velocidade = 120
		}
	}
}


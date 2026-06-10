class prod {
	constructor(nome, preco, desc = 0.5) {
		this._nome = nome
		this.preco = preco
		this.desc = desc
	}

	get nome() {
		return `Produto: ${this._nome}`
	}

	set nome(novoNome) {
		this._nome = novoNome.toUpperCase()
	}

	get precoFinal() {
		return this.preco * (1 - this.desc)
	}
}

const p1 = new prod('Caneta', 8.59)
console.log(p1.nome)
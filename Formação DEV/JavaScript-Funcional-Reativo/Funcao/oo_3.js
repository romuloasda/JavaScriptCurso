function prod(nome, preco, desconto) {
	this.nome = nome
	this.preco = preco
	this.desconto = desconto

	this.precoFinal = function () {
		return this.preco * (1 - this.desconto)
	}

}

prod.prototype.log = function () {
	console.log(`Nome: ${this.nome} Preço: r$ ${this.preco}`)
}

Object.defineProperty(prod.prototype, 'desconto', {
	get: function () {
		return this.desconto
	}
})

const p1 = new prod('Caneta', 8.59)
console.log(p1.precoFinal())


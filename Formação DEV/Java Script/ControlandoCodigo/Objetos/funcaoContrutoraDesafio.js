function Data(nome, preco, desconto = 0) {
	this.preco = preco
	this.nome = nome
	this.desconto = function () {
		return (1 - 0.15) * this.preco
	}
}

const prod1 = new Data('Monito', 400)

console.log(prod1.desconto())

const prod2 = new Data('Mouse', 200)

console.log(prod2.desconto())
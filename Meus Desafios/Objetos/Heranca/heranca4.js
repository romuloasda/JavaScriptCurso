class Carro {
	static totalProduzido = 0

	constructor(modelo) {
		this.modelo = modelo
		Carro.totalProduzido += 1
		this.id = Carro.totalProduzido
	}

	static obterTotal() {
		return `Total de carros fabricados: ${Carro.totalProduzido}`
	}


}

const carro = new Carro('Sandero')
const carro1 = new Carro('Onix')
const carro2 = new Carro('Gol')
console.log(Carro.obterTotal())
console.log(carro.id)

class Concessionaria {
	constructor() {
		this.estoque = []
	}

	cadastrarCarro(novoCarro) {
		this.estoque.push(novoCarro)
	}

	localizarPorId(idBuscado) {
		const idCarro = this.estoque.find(e => e.id === idBuscado)

		if (!idCarro) {
			return `Erro carro nao encontrado`
		} else {
			return `${idCarro.id} - ${idCarro.modelo}`
		}

		return idCarro
	}

	vendaPorId(idBuscado) {
		this.estoque = this.estoque.filter(e => e.id !== idBuscado)

		if (this.estoque) {
			return `${this.estoque}`

		} else {
			return `Erro carro não encontrado`

		}

	}

}

const concecionaria = new Concessionaria()
concecionaria.cadastrarCarro(carro)
concecionaria.cadastrarCarro(carro1)
concecionaria.cadastrarCarro(carro2)
console.log(concecionaria.vendaPorId(1))


console.log(concecionaria)





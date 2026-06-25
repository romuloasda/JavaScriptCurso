class dono {
	constructor(nome, idade = 0) {
		this._nome = nome
		this.idade = idade
	}

	get saudar() {
		return `Olá ${this._nome}, sua idade é ${this.idade}`
	}



	get nome() {
		return this._nome.toUpperCase()
	}

}

const dono1 = new dono('Romario', 33)
console.log(dono1.nome)

class pet {
	constructor(nomePet, especie) {
		this.nomePet = nomePet
		this.especie = especie
	}

	apresentar = function (dono) {
		this.dono = dono
		dono = dono()
		console.log('O pet ')
	}
}

const pet1 = new dono('Bicura', 20)
console.log(pet1)
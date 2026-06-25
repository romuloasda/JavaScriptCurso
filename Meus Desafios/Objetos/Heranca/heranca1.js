class Veiculo {
	constructor(marca, modelo) {
		this.marca = marca
		this.modelo = modelo
	}

	buzinar = () => 'Beeep Beeep'
}

const carro = new Veiculo('Renout', 'Sandero')

console.log(carro.buzinar())

class Moto extends Veiculo {
	constructor(marca, modelo, cilindrada) {
		super(marca, modelo)

		this.cilindrada = cilindrada
	}
}

const moto = new Moto('Honda', 'Biz', 125)
console.log(moto.buzinar())


class Funcionario {
	constructor(nome) {
		this.nome = nome
	}

}

class Gerente extends Funcionario {
	constructor(nome, cargo) {
		super(nome)
		this.cargo = cargo
		this._bonus = 0
	}

	get bonus() {
		return this._bonus
	}

	set bonus(valor) {
		if (valor >= 0) {
			this._bonus = valor
			return
		} else {
			console.log('bonus invalido')
			return
		}
	}
}

const funcionario = new Gerente('Pan', 'Gerente')
funcionario.bonus = 500
console.log(funcionario)


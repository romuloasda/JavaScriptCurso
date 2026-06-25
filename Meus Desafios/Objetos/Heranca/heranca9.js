class Dev {
	constructor(nome) {
		this.nome = nome
		this._salario = 3000
	}

	get salario() {
		return this._salario
	}

	set salario(valor) {
		if (valor > 3000) {
			return this._salario = valor
		} else {
			return
		}
	}

	calcularpagamento() {
		return this._salario
	}
}

class RegistrarContrato extends Dev {
	constructor(nome) {
		super(nome)

		this.bonusAnual = 5000
	}

	calcularpagamento() {
		const totalPagamento = this.bonusAnual + super.calcularpagamento()
		return `O salario ${this._salario} mais o bonus ${this.bonusAnual} é ${totalPagamento}`
	}
}

const novoDev = new Dev('Romulo')
console.log(novoDev.calcularpagamento())

const novoContrato = new RegistrarContrato(novoDev)
console.log(novoContrato.calcularpagamento())

const contratacao = function (newDev, ...tecnologias) {
	const listaDosContratados = [{
		...newDev,
		skils: tecnologias
	}]

	return listaDosContratados
}

console.log(contratacao(novoContrato, 'Web', 'React', 'BancoDeDados'))


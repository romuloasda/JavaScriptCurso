class Foguete {
	constructor(nome) {
		this.nome = nome
		this._combustivel = 100
	}

	get combustivel() {
		return this._combustivel
	}

	set combustivel(novoValor) {

		if (novoValor > 0 && novoValor <= 500) {
			this._combustivel += novoValor
		} else if (novoValor > 500) {
			this._combustivel += 500
		} else {
			console.log("❌ Capacidade fora dos limites do tanque!")
		}


	}

	calcularAnatomia() {
		return this._combustivel * 10
	}
}

const novoFoguete = new Foguete('Elon')
novoFoguete.combustivel = 690
novoFoguete.combustivel = 690
console.log(novoFoguete)

class FoguetePesado extends Foguete {
	constructor(nome) {
		super(nome)
		super.calcularAnatomia()
		this.propulsorExtra = 2000
	}

	somarPropulsorExtra() {
		const soma = this.propulsorExtra + super.calcularAnatomia()
		return `A soma total é ${soma}`
	}

}

const pesado = new FoguetePesado('Musk')
pesado.combustivel = 300
console.log(pesado.somarPropulsorExtra())
console.log(pesado)

const registrarMissao = (objFoguete, ...tripulantes) => {
	return {
		objFoguete,
		tripulantes: tripulantes
	}
}

const equipe = registrarMissao(pesado, 'Marata', 'Eclison', 'arthur')
console.log(equipe)
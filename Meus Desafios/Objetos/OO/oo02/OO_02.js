class Foguete {
	constructor(nome) {
		this.nome = nome
		this._combustivel = 100
	}

	get combustivel() {
		return this._combustivel
	}

	set combustivel(novoValor) {
		this._combustivel += novoValor

		if (this._combustivel > 500) {
			this._combustivel = 500
			return
		} else if (this._combustivel < 0) {
			this._combustivel = 0
			return
		} else {
			"❌ Capacidade fora dos limites do tanque!"
		}
	}

	calcularAnatomia() {
		return this._combustivel * 10
	}
}

const novoFoguete = new Foguete('Elon')
// novoFoguete.combustivel = 600
novoFoguete.combustivel = 600
novoFoguete.combustivel =
	console.log(novoFoguete.combustivel)

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

const pesado = new FoguetePesado(novoFoguete)
console.log(pesado.somarPropulsorExtra())

const registrarMissao = (objFoguete, ...tripulantes) => {
	return [new FoguetePesado(objFoguete), ...tripulantes]
}

const equipe = registrarMissao(novoFoguete, 'Marata', 'Eclison', 'arthur')
console.log(equipe)
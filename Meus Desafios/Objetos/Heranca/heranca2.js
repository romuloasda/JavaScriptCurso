class Veiculo {
	constructor(marca, modelo) {
		this.marca = marca
		this.modelo = modelo
	}

	buzinar = () => 'Beeep Beeep'
}

class Caminhão extends Veiculo {
	constructor(marca, modelo) {
		super()
	}

	buzinar = () => console.log('VRUUUMM!! BAAAMUUU!!')
}

const cam = new Caminhão('Volvo', 'FH')
cam.buzinar()

class ContaBancaria {
	constructor(titular) {
		this.titular = titular
		this._saldo = 0
	}

	get saldo() {
		return this._saldo
	}

	depositarValor(valor) {
		if (valor > 0) {
			this._saldo += valor
			console.log(`${this.titular} | SALDO: ${this._saldo} |`)
			return
		}
	}
}

const cliente = new ContaBancaria('Salen')
cliente.depositarValor(500)
cliente.depositarValor(500)
cliente.depositarValor(500)

class ContaPremium extends ContaBancaria {
	constructor(titular) {
		super(titular)
	}

	depositarValor(valor) {
		const valorComBonus = valor + (valor * 0.05)
		super.depositarValor(valorComBonus)
		console.log(`${this.titular} | SEU SALDO COM BONUS DE 5% ${this._saldo} |`)
		return
	}
}

const clientePremium = new ContaPremium('Master')
clientePremium.depositarValor(1000)
clientePremium.depositarValor(1000)
console.log(clientePremium)



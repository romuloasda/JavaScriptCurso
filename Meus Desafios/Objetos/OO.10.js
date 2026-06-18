const carro = { modelo: 'Sandero', marca: 'Renault', ano: 2020, motor: 1.6 }
const { modelo, ...especificacoes } = carro

console.log(modelo)
console.log(especificacoes)

class Filme {
	constructor(titulo, ...atores) {
		this.titulo = titulo
		this.elenco = [...atores]
	}

	addDubles = (...dubles) => {
		this.elenco = [...this.elenco, ...dubles]
	}
}

const novoFilme = new Filme('Matrix', 'Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss')
novoFilme.addDubles('James', 'ManoDow')
console.log(novoFilme)

class Config {
	constructor() {
		this._volume = 50
	}

	get volume() {
		return this._volume
	}

	set volume(novoVolume) {
		if (novoVolume > 0 && novoVolume <= 100) {
			this._volume = novoVolume
			console.log(novoVolume)
			return;
		} else {
			console.log('Valor Foda dos Limites (0-100)')
			return;
		}
	}
}

const configuracao = new Config()
configuracao.volume = 10
console.log(configuracao)

const ajustandoSistema = ({ volume }) => {
	console.log(volume)

}

ajustandoSistema(configuracao)
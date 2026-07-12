class Heroi {
	constructor(nome, classe) {
		this.nome = nome
		this.classe = classe
	}

	apresentar() { return `Olá eu sou ${this.nome} e luto como ${this.classe}` }
}

const novoHeroi = new Heroi('Mutreta', 'Mago')
console.log(novoHeroi.apresentar())

class Pet {
	constructor(nome, especie) {
		this.nome = nome
		this.especie = especie
	}


	emitirSom() {
		if (this.especie === 'Gato') {
			return `Miauuuuuu`
		}

		if (this.especie === 'Cachorro') {
			return `AuAuAUAU`
		}

		if (!this.especie) {
			return `Especia não encontrada`
		}
	}

}

const gato = new Pet('Pan', 'Gato')
console.log(gato.emitirSom())

const coelho = new Pet('Mingau', 'Coelho')
console.log(coelho.emitirSom())

class Contador {
	constructor() {
		this.valor = 0
	}

	incrementar() {
		this.valor += 1
	}
}

const meuContador = new Contador

meuContador.incrementar()
meuContador.incrementar()
meuContador.incrementar()
meuContador.incrementar()

console.log(meuContador)
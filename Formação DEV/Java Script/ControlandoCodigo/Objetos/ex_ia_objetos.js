function Jogador(nome, posicao, time) {
	this.nome = nome
	this.posicao = posicao
	this.time = time

	this.exibir = function () {
		return `O jogador ${this.nome} do time do ${this.time} esta na posição ${this.posicao}`
	}
}

const jogador1 = new Jogador('Neymar', 'Atacante', "Brasil")
console.log(jogador1.exibir())

function Pet(nome, especie) {
	this.nome = nome
	this.especie = especie

	this.emitirSom = function () {
		if (this.especie === 'gato') {
			return `Miauuuuuuuuuuuuu`
		} else if (this.especie === 'cachorro') {
			return `Au Au Au Au AU.....`
		} else if (this.especie === 'cabra') {
			return `BEEEEEEEEEEEEEEEEEEEEEEEEE`
		} else {
			return `Éspecie não aceita no sistema`
		}
	}
}

const pet1 = new Pet('Bicura', 'gatop')
console.log(pet1.emitirSom())

function Contador() {
	this.valor = 0

	this.incrementar = function () {
		this.valor += 1
	}
}

const meuContador = new Contador()
meuContador.incrementar()
meuContador.incrementar()
console.log(meuContador.valor)
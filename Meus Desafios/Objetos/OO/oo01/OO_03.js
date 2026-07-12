class Jogador {
	constructor(nome, posicao, time) {
		this.nome = nome
		this.posicao = posicao
		this.time = time
		this.gol = 0
	}

	fazerGol = function (gol) {
		return this.gol += gol
	}
}

const jogador1 = new Jogador('Romario', 'Atacante', 45)
const jogador2 = new Jogador('Mario', 'Atacante', 30)
const jogador3 = new Jogador('Miguel', 'Atacante', 90)

jogador1.fazerGol(2)
console.log(jogador1)

console.log(jogador2)
console.log(jogador3)

class Pet {
	constructor(nome, especie) {
		this.nome = nome
		this.especie = especie
	}

	emitirSom = () => {
		if (this.especie === 'Cachoroo') {
			console.log('AuAuAUauuauauauauauauauauauauauauau')
		}

		if (this.especie == 'Gato') {
			console.log('Miauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
		}
	}
}

const pet1 = new Pet('Bicura', 'Gato')
pet1.emitirSom()

class Personagem {
	constructor(classe, nivel = 1) {
		this.classe = classe
		this.nivel = nivel
		this.poderAtaque = 0
	}

	subirNivel = () => {
		return this.nivel += 1
	}

	poder = () => {
		return this.poderAtaque += (this.nivel * 2)
	}
}

const mg1 = new Personagem('MG')
mg1.subirNivel()
mg1.poder()
mg1.subirNivel()
mg1.subirNivel()

console.log(mg1)

class Inimigo {
	constructor(nome, vida = 100) {
		this.nome = nome
		this.vida = vida
		this.status = 'Vivo'

	}
}

class Mago {
	constructor(nome) {
		this.nome = nome
		this.poderAtaque = 25
	}

	lancarFeitico = (alvo) => {
		if (alvo.status !== 'Vivo' && alvo.vida <= 0) {
			console.log(`O alvo esta morto! `)
			return;
		}

		alvo.vida -= this.poderAtaque
		console.log(`${this.nome} lançou um feitiço no ${alvo.nome}! (Dano: ${this.poderAtaque})`)

		if (alvo.vida <= 0) {
			alvo.vida = 0
			alvo.status = 'Morto'
			console.log(`💥 O ${alvo.nome} foi derrotado e está MORTO!`);
		}

	}
}

const orc1 = new Inimigo('Orc')
console.log(orc1)

const mago = new Mago('Gandalf')
mago.lancarFeitico(orc1)
mago.lancarFeitico(orc1)
mago.lancarFeitico(orc1)
mago.lancarFeitico(orc1)
mago.lancarFeitico(orc1)

console.log(orc1)

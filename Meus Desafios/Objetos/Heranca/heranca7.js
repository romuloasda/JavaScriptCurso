class Gamer {
	constructor(nickname, nivel, categoria) {
		this.nickname = nickname
		this.nivel = nivel
		this.categoria = categoria
	}

}

const gm1 = new Gamer('Thor', 40, 'Guerreiro')
const gm2 = new Gamer('Legolas', 60, 'Arqueiro')
const gm3 = new Gamer('Gandalf', 80, 'Mago')
const gm4 = new Gamer('Ragnar', 35, 'Guerreiro')

class Guilda {
	constructor() {
		this.membros = []
	}

	entrarNaGulda(novoMembro) {
		this.membros.push(novoMembro)
	}

	listaGuilda() {

		return this.membros.map((element, i) => `${i + 1} Nome: ${element.nickname} lvl: ${element.nivel} Classe: ${element.categoria}`);
	}

	listaVip() {
		const totalNivelVip = this.membros
			.filter(e => e.categoria === 'Guerreiro')
			.map(e => e.nivel + 10)
			.reduce((ac, nivelAtual) => { return ac + nivelAtual }, 0)

		return `O total do poder da GUILDA é ${totalNivelVip}`

	}
}

const minhsGuilda = new Guilda()
minhsGuilda.entrarNaGulda(gm1)
minhsGuilda.entrarNaGulda(gm2)
minhsGuilda.entrarNaGulda(gm3)
minhsGuilda.entrarNaGulda(gm4)

console.log(minhsGuilda.listaGuilda())
console.log(minhsGuilda.listaVip())

class Toneio {
	constructor(...lista) {
		this.participantes = [...lista]
	}

	gerarPreviaTunada() {
		const nivelTunado = this.participantes.map(jogador => {
			return {
				...jogador,        // 1. O Spread derrete o jogador antigo e clona todas as propriedades (nome, categoria)
				nivel: jogador.nivel * 2 // 2. Substitui a propriedade 'nivel' na CÓPIA multiplicando por 2
			};
		});
		return nivelTunado
	}
}

const torneio = new Toneio(gm1, gm2, gm3, gm4)
console.log(torneio.gerarPreviaTunada())







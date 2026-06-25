const jogadoresAvancados1 = [
	{ nickname: 'Thor', classe: 'Guerreiro', itens: { arma: 'Martelo', escudo: 'Ferro' } },
	{ nickname: 'Gandalf', classe: 'Mago', itens: { arma: 'Cajado', escudo: 'Magia' } },
	{ nickname: 'Legolas', classe: 'Arqueiro', itens: { arma: 'Arco', escudo: 'Nenhum' } }
];

const inpecionarArma = (lista, nickBuscado) => {
	const integrante = lista.find(e => e.nickname === nickBuscado)
	if (integrante) {
		return `O jogador ${integrante.nickname} esta usando a arma ${integrante.itens.arma} e o escudo ${integrante.itens.escudo}`
	} else {
		return `jogadores não encontrado, por favor acescente uma lista`
	}

}
let casa = []
console.log(inpecionarArma(casa, 'Thor'))
console.log(inpecionarArma(jogadoresAvancados1, 'Gandalf'))

class Integrantes {
	constructor(nome, classe, itens) {


		this.nome = nome
		this.classe = classe
		this.itens = itens

	}

	addMembro(jogador) {
		this.jogadoresAvancados = []
		this.jogadoresAvancados += this.jogadoresAvancados.push(jogador)
		return this.jogadoresAvancados
	}

	addNovoJogador(jogador) {

	}
}

const jogador1 = new Integrantes('thor', 'Martelo', 'Ferro')


console.log(jogador1)



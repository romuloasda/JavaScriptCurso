class Membros {
	constructor(nome, nivel) {
		this.nome = nome
		this.nivel = nivel
	}

	exibirDetalhes() {
		return `O seu nome é ${this.nome}
				O seu nivel é ${this.nivel}`
	}
}

const mago = new Membros('romylo', 50)
const guerreiro = new Membros('Mario', 25)
const arch = new Membros('Veronica', 60)
const suporte = new Membros('Veronica', 12)

class Listagem {
	constructor() {
		this.membros = []
	}

	addMembros(...membro) {

		this.membros.push(...membro)
	}

	verMembros() {
		const lista = this.membros.map(e => e.nome)
		return lista
	}
}

const clan = new Listagem()
clan.addMembros(mago, guerreiro, arch, suporte)
console.log(clan.verMembros())
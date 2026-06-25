class Usuario {
	constructor(nome) {
		this.nome = nome
		this.classe = []
	}

	newClasse = (classe) => {
		if (classe === 1) {
			this.classe.push('Guerreiro')
			return;
		}

		if (classe === 2) {
			this.classe.push('Magico')
			return
		}

		if (classe === 3) {
			this.classe.push('MG-Gladiator')
			return
		}
	}

	mostarPlayer = () => {
		this.classe.forEach((e, i) => console.log(`${this.nome} - ${e}`))
	}


}

const us1 = new Usuario('Romulo')
us1.newClasse(3)
console.log(us1)

const us2 = new Usuario('Jhessy')
us2.newClasse(1)

us2.mostarPlayer()




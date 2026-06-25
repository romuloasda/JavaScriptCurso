class Inimigo {
	constructor(nome, vida, elemento) {
		this.nome = nome
		this.vida = vida
		this.elemento = elemento
	}

	static criarChefeFogo(nome) {
		return new Inimigo(nome, 500, 'Fogo')
	}
}

const boss = Inimigo.criarChefeFogo('Ragnaros')
console.log(boss)

class TokenAcesso {

	static totalTokensGerados = 0

	constructor() {
		TokenAcesso.totalTokensGerados += 1
	}

	static ehTokenValido(tokenTexto) {
		if (tokenTexto.length === 6) {
			return true
		} else {
			return false
		}
	}
}

const tk1 = new TokenAcesso()
const tk2 = new TokenAcesso()
console.log(TokenAcesso.ehTokenValido('123456'))
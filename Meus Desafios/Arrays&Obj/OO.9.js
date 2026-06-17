const itemOriginais = { nome: 'Espada', dano: 50 }
const itemEncontrado = { ...itemOriginais, dano: 80, elemento: 'Fogo' }
console.log(itemEncontrado)

class Filme {
	constructor(titulo, ...atores) {
		this.titulo = titulo
		this.elenco = [titulo, ...atores]
	}
}

const novoFilme = new Filme('Matrix', 'Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss')
console.log(novoFilme)

class Usuario {
	constructor(nome) {
		this.nome = nome
		this._idade = 0
	}

	get idade() {
		return this._idade
	}

	set idade(novaIdade) {
		if (novaIdade > 0 && novaIdade < 120) {
			this._idade = novaIdade
			console.log(novaIdade)
			return;
		} else {
			console.log('Idade Invalida')
		}
	}
}

const novoUsuario = new Usuario('Master')
novoUsuario.idade = -5
novoUsuario.idade = 25


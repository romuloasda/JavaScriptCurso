class filme {
	constructor(titulo, status = 'Disponivel') {
		this.titulo = titulo
		this.status = status
	}
}

class Locadora {
	constructor() {
		this.acervo = [
			new filme('Matrix'),
			new filme('Interestelar'),
			new filme('O poderoso Chefão')
		]
	}

	alugarFilme = (nomeDoFilme) => {
		const existeFilme = this.acervo
			.find(procurarFilme => procurarFilme.titulo === nomeDoFilme)

		if (!existeFilme) {
			console.log(`O filme ${nomeDoFilme} não se escontra no catalogo`)
			return
		}

		if (existeFilme.status === 'Alugado') {
			console.log(`O filme ${nomeDoFilme} já esta ${existeFilme.status}`)
			return
		}

		if (existeFilme) {
			existeFilme.status = 'Alugado'
			console.log('Filme alugado com sucesso ')
			return
		}


	}

	devolverFilme = (nomeDoFilme) => {
		const existeFilme = this.acervo
			.find(procurarFilme => procurarFilme.titulo === nomeDoFilme)

		if (!existeFilme) {
			console.log('Filme não encontrado')
			return
		}

		if (existeFilme.status === 'Alugado') {
			existeFilme.status = 'Disponivel'
			console.log('Filme Devolvido Com Sucesso!!!')
			return
		}
	}

	listarDisponivel = () => {
		const filmesDisponiveis = this.acervo
			.filter(e => e.status === 'Disponivel')
			.forEach((el, indice) => {
				console.log(`${indice + 1} - ${el.titulo}`)
			})
		// console.log(filmesDisponiveis)
		return;
	}


}

const locarFilme = new Locadora
locarFilme.alugarFilme('Matrix')
locarFilme.alugarFilme('Matrix')

locarFilme.listarDisponivel()

// const filmeDisponivel = filmes.forEach((element, indice) => {
// 	console.log(`${indice + 1} - ${element.titulo}`)
// });
// console.log(locarFilme)




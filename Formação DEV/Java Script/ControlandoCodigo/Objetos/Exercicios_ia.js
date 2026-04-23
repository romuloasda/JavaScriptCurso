// 1. O Crachá do Programador
// Crie um objeto chamado programador
// com as propriedades: nome,
// linguagem(ex: 'JavaScript') e
// experiencia(ex: 'Iniciante').
// Imprima no console apenas a linguagem que ele estuda usando objeto.propriedade.

const programador = {
	nome: 'Romulo',
	linguagem: 'JavaScript',
	experiencia: 'Nenhuma'
}

console.log(programador.linguagem)

const pessoa = {

}

const carro = {
	modelo: 'Sandero',
	ano: '2018',
	ligar() {
		return `O ${this.modelo} está roncando o motor`
	}
}

console.log(carro.ligar())

pessoa.nome = 'Romulo'
pessoa.idade = 33

console.log(pessoa)

const aluno = {
	nome: 'Romulo',
	idade: 33,
	contato: {
		email: 'romulo@email.com',
		telefone: 85858585
	}
}

console.log(aluno.contato.email)

const caixaDeSom = {
	volume: 10,
	aumentarVolume() {
		return this.volume += 5
	}
}

caixaDeSom.aumentarVolume()

console.log(caixaDeSom.volume)

const conversor = {
	taxaDola: 5.0,
	converterReal(valorEmReal) {
		return valorEmReal * this.taxaDola
	}
}

console.log(conversor.converterReal(10))

const carrinho = [
	{ nome: 'NoteBook', preco: 5000 },
	{ nome: 'Mouse', preco: 150 },
	{ nome: 'Teclado', preco: 300 }
]

console.log(carrinho)

carrinho.forEach(function (elemento, indice) {
	console.log(`Item ${indice + 1}: ${elemento.nome} ${elemento.preco}`)
})

const produtosEstoque = [
	{ nome: 'NoteBoom', estoque: 10 },
	{ nome: 'Mouse', estoque: 5 },
	{ nome: 'Teclado', estoque: 5 },
]

const filtrado = produtosEstoque.filter(p => p.estoque < 10)

console.log(filtrado)


const carteira = {
	investimentos: [100, 200, 500],
	calcTotal() {
		return this.investimentos.reduce(function (acumulador, objetoatual) {
			return acumulador + objetoatual
		},)
	}
}

console.log(carteira.calcTotal())

const alunos = [
	{ nome: 'Ana', nota: 9 },
	{ nome: 'Beto', nota: 6 }
]

alunos.forEach(function (elemento) {
	console.log(`${elemento.nome} e ${elemento.nota}`)
})

const produtos = [
	{ nome: 'Camisa', preco: 50 },
	{ nome: 'Calça', preco: 100 }
]

const acrescimo = produtos.map(produto => {
	return {
		...produto,
		preco: (produto.preco * 1.1).toFixed(2)
	}
})

console.log(acrescimo)

const biblioteca = {
	livros: [
		{ titulo: 'O poder do HABITO', autor: 'Marken' },
		{ titulo: 'Leitura Guiada', autor: 'Joao' },
		{ titulo: 'Setenta tons de pb', autor: 'Vitor' }
	],
	listarTitulo() {
		return this.livros.map(function (item) {
			return item.titulo
		})
	}
}

console.log(biblioteca.listarTitulo())
const nome = {
	nome: ['romulo', 'Jhessyca', 'Helena', 'Joselma'],
	idade: [33, 30, 0.6, 52]
}

console.table(nome)

const produto = {
	nome: 'MacBook',
	preco: 20000,
	desconto: 0.25,
	precoComDesconto: function () {
		return this.preco * (1 - this.desconto) // Metodo é um funcao detro do Objeto

	}
}

console.log(produto.preco)
console.log(produto.precoComDesconto())

const data = {
	dia: 7,
	mes: 11,
	ano: 2026,
	formatar: function () {
		return `${this.dia}/${this.mes}/${this.ano}`
	}
}

data.dia = 9
data.mes = 12
data.noFuturo = true

console.log(data.formatar())
console.table(data)

const cliente = {
	codigo: 27235,
	nome: 'Ana Medeiros Albuquerque',
	vip: true,
	enderenco: {
		logradouro: 'Rua Medico Arlindo Leite',
		numero: 987,
		complemento: 'APT 302 Bloco C',
		pontoRef: ['Hospital São Pedro', 'Shopping Rio Mar']
	},
	filhos: [
		{ nome: 'Pedro Herrinque', anoDeNascimento: 2004 },
		{ nome: 'Mariana Albuquerque', anoDeNascimento: 2014 },
		{ nome: 'Daniel Albuquerque', anoDeNascimento: 2017 },
	]
}

console.log(cliente['enderenco']['logradouro'])
console.log(cliente.enderenco.logradouro)
console.log(cliente.filhos[1])

// Criar objeto com funcção

function criarData(dia, mes, ano) {
	return {
		dia: dia,
		mes: mes,
		ano: ano,
		formatar: function () {
			return `${this.dia}/${this.mes}/${this.ano}`
		}
	}
}

const datahoje = criarData(22, 04, 2026)
console.log(datahoje.formatar())

// Classe!

// Função construtora cria objeto

// 1. Incia com letra maiúscula [Não Obrigatorio]
// 2. Chamar função com new Data()
// 3. Usar o this para acrescentar atrib. e metodos do objeto

function Data(dia, mes, ano) {
	this.dia = dia
	this.mes = mes
	this.ano = ano

	this.formatar = function () {
		return `${this.dia}/${this.mes}/${this.ano}`
	}
}

const data1 = new Data(22, 04, 2025)
data1.ano = 2026
console.log(data1.formatar())
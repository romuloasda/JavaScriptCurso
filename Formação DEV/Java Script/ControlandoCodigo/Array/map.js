const alunos = [
	{ nome: "Romulo", n1: 4.5, n2: 7.6, n3: 5.1 },
	{ nome: "jhessyca", n1: 2.5, n2: 10.0, n3: 7.0 },
	{ nome: "Mario", n1: 6.0, n2: 5.8, n3: 8.0 },
	{ nome: "Fernando", n1: 3.3, n2: 5.5, n3: 9.0 },
]

const alunos2 = alunos.map((nome, indice) => {
	const media = Math.ceil((nome.n1 + nome.n2 + nome.n3) / 3)
	return `${indice + 1} ${nome.nome} media: ${media}`
})


console.log(alunos2)

const numeros = [1, 2, 3, 4, 5, 6]

// 1. FILTER: Quero apenas os pares
const pares = numeros.filter(n => n % 2 === 0) // [2, 4, 6]

// 2. MAP: Quero o dobro desses pares
const dobros = pares.map(n => n * 2) // [4, 8, 12]

// 3. REDUCE: Quero a soma de todos esses dobros
const total = dobros.reduce((acumulador, atual) => acumulador + atual, 0) // 24

console.log(`O numeros pares são ${pares}, 
	os numeros multiplicado por 2 são ${dobros},
	e a sota total é ${total}`)

const notas = [4.5, 7.0, 8.5, 5.0, 10.0, 6.5]

const maiorIgualSete = notas.filter(n => n >= 7)
console.log(maiorIgualSete)

const bonusDez = notas.map(n => (n * 1.1).toFixed(2))
console.log(bonusDez)

const media = notas.reduce((acumulador, atual, array) => (acumulador + atual))
console.log(media)

const estoque = [10, 20, 30, 40, 50]

const result = estoque.filter(n => n > 25).map(n => n + 25).reduce((acumulador, atual) => acumulador + atual)
console.log(result)

const produtos = [
	{ nome: 'Teclado', preco: 150, categoria: 'Eletrônico' },
	{ nome: 'Mouse', preco: 80, categoria: 'Eletrônico' },
	{ nome: 'Cadeira', preco: 600, categoria: 'Móvel' },
	{ nome: 'Monitor', preco: 900, categoria: 'Eletrônico' },
	{ nome: 'Mesa', preco: 400, categoria: 'Móvel' }
]

const filtroProdutos = produtos
	.filter(n => n.categoria === 'Eletrônico')
	.map(n => n.preco)
	.reduce((ac, total) => ac + total)

console.log(filtroProdutos)

const alunos = [
	{ nome: 'Ana', nota: 8.5, bolsista: true },
	{ nome: 'Bia', nota: 9.0, bolsista: false },
	{ nome: 'Carlos', nota: 5.5, bolsista: true },
	{ nome: 'Daniel', nota: 7.2, bolsista: true },
	{ nome: 'Evelyn', nota: 4.0, bolsista: false }
]

const bolsistas = alunos
	.filter(n => n.bolsista === true)
	.filter(n => n.nota >= 7)
	.map(n => n.nome)
console.log(bolsistas)

const funcionarios = [
	{ nome: 'Ricardo', salario: 2500, setor: 'Vendas' },
	{ nome: 'Vanessa', salario: 5000, setor: 'TI' },
	{ nome: 'Raul', salario: 3000, setor: 'Vendas' },
	{ nome: 'Beatriz', salario: 4500, setor: 'TI' },
	{ nome: 'Marcos', salario: 2000, setor: 'Vendas' }
]

const rh = funcionarios
	.filter(n => n.setor === 'Vendas' && n.salario < 3000)
	.map(n => n.salario * 1.1)
	.reduce((ac, total) => ac + total)

console.log(rh)

const jogadores = [
	{ nome: 'Link', pontos: 120, nivel: 10 },
	{ nome: 'Zelda', pontos: 450, nivel: 15 },
	{ nome: 'Mario', pontos: 80, nivel: 5 },
	{ nome: 'Peach', pontos: 500, nivel: 20 },
	{ nome: 'Luigi', pontos: 300, nivel: 12 }
]

const maisCem = jogadores
	.filter(n => n.pontos > 100)
	.sort((a, b) => a.nome.localeCompare(b.nome))
	.map(n => `Jogador ${n.nome} tem nivel ${n.nivel}`)

console.log(maisCem)

console.log(jogadores)

const filmes = [
	{ titulo: 'Matrix', lancamento: 1999, nota: 8.7 },
	{ titulo: 'Vingadores', lancamento: 2012, nota: 8.0 },
	{ titulo: 'O Poderoso Chefão', lancamento: 1972, nota: 9.2 },
	{ titulo: 'Interestelar', lancamento: 2014, nota: 8.6 },
	{ titulo: 'Jurassic Park', lancamento: 1993, nota: 8.2 }
]

const depoisDoisMil = filmes
	.filter(n => n.lancamento > 2000)
	.sort((a, b) => b.nota - a.nota)
	.map(n => `O filme ${n.titulo} tem nota ${n.nota}`)

console.log(depoisDoisMil)

const livros = [
	{ titulo: 'O Hobbit', categoria: 'Fantasia', preco: 40, estoque: 5 },
	{ titulo: '1984', categoria: 'Distopia', preco: 35, estoque: 0 },
	{ titulo: 'Duna', categoria: 'Ficção', preco: 60, estoque: 2 },
	{ titulo: 'Harry Potter', categoria: 'Fantasia', preco: 50, estoque: 10 },
	{ titulo: 'Fundação', categoria: 'Ficção', preco: 45, estoque: 3 }
]

const valorTotal = livros
	.filter(n => (n.categoria === 'Ficção' || n.categoria === 'Fantasia') && n.estoque > 0)
	.map(n => n.preco * n.estoque)
	.reduce((ac, total) => ac + total, 0)

console.log(valorTotal)
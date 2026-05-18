const alunos = [
	{ nome: "Romulo", n1: 4.5, n2: 7.6, n3: 5.1 },
	{ nome: "jhessyca", n1: 2.5, n2: 10.0, n3: 7.0 },
	{ nome: "Mario", n1: 6.0, n2: 5.8, n3: 8.0 },
	{ nome: "Fernando", n1: 3.3, n2: 5.5, n3: 9.0 },
]

const alunos3 = alunos.map(nota => (nota.n1 + nota.n2 + nota.n3)).reduce(function (acumulador, atual) {
	return acumulador + atual
})

console.log(alunos3)
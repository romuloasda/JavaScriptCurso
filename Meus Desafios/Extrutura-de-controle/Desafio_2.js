//  Pipelines Funcionais com Destructuring e Spread

const inscricoes = [
	{ id: 1, aluno: "Lucas", curso: "JavaScript", valorOriginal: 300, pago: true },
	{ id: 2, aluno: "Mariana", curso: "Design", valorOriginal: 150, pago: false },
	{ id: 3, aluno: "Rodrigo", curso: "JavaScript", valorOriginal: 450, pago: true },
	{ id: 4, aluno: "Beatriz", curso: "Marketing", valorOriginal: 200, pago: true },
	{ id: 5, aluno: "Carla", curso: "JavaScript", valorOriginal: 500, pago: false }
];

const inscricoesComDesconto = inscricoes.map(({ valorOriginal, ...resto }) => {
	return {
		...resto,
		valorOriginal,
		valorFinal: valorOriginal * 0.80
	}
})

console.table(inscricoesComDesconto)

const somaTodosJs = inscricoes
	.filter(({ curso, pago }) => curso === "JavaScript" && pago)
	.map(({ valorOriginal }) => valorOriginal + 15)
	.reduce((ac, a) => ac + a, 0)

console.table(somaTodosJs)


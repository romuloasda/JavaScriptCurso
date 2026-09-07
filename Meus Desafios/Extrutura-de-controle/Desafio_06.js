
const equipeTI = [
	{ id: 1, nome: "Carlos", nivel: "pleno", salarioBase: 5000, faltas: 0 },
	{ id: 2, nome: "Juliana", nivel: "senior", salarioBase: 9000, faltas: 1 },
	{ id: 3, nome: "Pedro", nivel: "junior", salarioBase: 3000, faltas: 3 }
];

function validadorFolha(objeto, orçamentoSetor) {
	if (!Array.isArray(objeto) || objeto.length === 0) {
		throw new Error('"Lista de colaboradores inválida ou vazia"')
	}

	if (orçamentoSetor <= 0 || orçamentoSetor === undefined || orçamentoSetor === null) {
		throw new Error("Orçamento setorial inválido")
	}


	for (let { nome, salarioBase, faltas } of objeto) {
		if (salarioBase <= 0 || faltas < 0) {
			throw new Error(`Dados inconsistentes no cadastro de ${nome}`)
		}
	}

	const calculoSalarioLiquido = objeto.map(({ nivel, salarioBase, faltas, ...resto }) => {
		let dezPorcentoSenior = salarioBase * 0.10
		let calculoFaltas = faltas * 150
		return {
			...resto,
			nivel: nivel,
			salarioBase: nivel === 'senior'
				? salarioBase + dezPorcentoSenior - calculoFaltas
				: salarioBase - calculoFaltas,
			faltas: faltas
		}
	})

	const somaFinalTodosSalarios = calculoSalarioLiquido.reduce((ac, a) => ac + a.salarioBase, 0)

	if (orçamentoSetor - somaFinalTodosSalarios < 0) {
		throw new Error('Orçamento Setorial Insuficiente')
	}

	return {
		totalFuncionarios: objeto.length,
		totalPago: somaFinalTodosSalarios,
		saldoRestante: orçamentoSetor - somaFinalTodosSalarios
	}



}

try {
	const calculandoFolha = validadorFolha(equipeTI, 20000)
	console.table(calculandoFolha)
} catch (erro) {
	console.log(erro)
}

try {
	const calculandoFolha = validadorFolha(equipeTI, 15000)
	console.table(calculandoFolha)
} catch (erro) {
	console.log(erro)
} finally {
	console.log('Calculo Finalizado....')
}




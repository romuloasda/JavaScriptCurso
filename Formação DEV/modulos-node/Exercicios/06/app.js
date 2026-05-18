const { alunos } = require('./bancoDados')

const novaTurma = alunos.filter((elemento) => {
	return elemento.nota > 7
})

console.log(novaTurma)
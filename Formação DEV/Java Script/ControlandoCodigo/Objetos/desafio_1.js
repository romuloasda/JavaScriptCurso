//Objeto aluno
//Atributos: nome, disciplinas (nome 3 notas)
//Metodo: media(diciplina), mediaGlobal

const aluno = {
	nome: 'Romulo',
	diciplinas: [
		{ nome: 'Portugues', nota: [7, 8, 6] },
		{ nome: 'Matematica', nota: [2, 6, 5] },
		{ nome: 'ingles', nota: [8, 9, 10] },
	],
	media: function (nomeDisciplina) {
		return nomeDisciplina / 3
	}
}

console.log(aluno)


const pessoa = Object.freeze({
	nome: 'Maria',
	altura: 1.76,
	cidade: 'São Paulo'
})

// Atribuição por Referencia
const outraPessoa = pessoa

// Passagem por Referencia
function alterarpessoa(pessoa) {
	const novaPessoa = { ...pessoa }
	novaPessoa.nome = 'João'
	novaPessoa.cidade = 'fortaleza'
	return novaPessoa

}

const novaPessoa = alterarpessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a;
let b = a //Atribuição por valor
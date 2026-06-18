// Funções que operam em outras funções
//  tomando-as com argumentos ou retornando-as
// são chamadas Higher-Order Function

function executar(fn, ...params) {
	return function (textoInicial) {
		return `${textoInicial} ${fn(...params)}!`
	}
}

function somar(a, b, c) {
	return a + b + c
}

function mult(a, b) {
	return a * b
}

const r1 = executar(somar, 4, 5, 6)('O resultado soma')
const r2 = executar(mult, 30, 40)('o resultado mult')

console.log(r1, r2)
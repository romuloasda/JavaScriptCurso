function composicao(...fns) {
	// Currying (lazy eval.)
	return function (valor) {
		return fns.reduce((acc, fn) => {
			return fn(acc)
		}, valor)

	}
}

function gritar(texto) {
	return texto.toUpperCase()
}

function endatizar(texto) {
	return `${texto}!!!!`
}

function tonarLento(texto) {
	return texto.split('').join(' ')
}

const resultado = composicao(
	gritar,
	endatizar,
	tonarLento

)('Cuidaaado!!!!')



console.log(resultado)
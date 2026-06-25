function composicao(...fns) {
	// Currying (lazy eval.)
	return function (valor) {
		return fns.reduce(async (acc, fn) => {
			if (Promise.resolve === acc) {
				return fn(await acc)
			} else {
				return fn(await acc)
			}
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
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(texto.split('').join(' '))
		}, 3000)
	})
}

const resultado = composicao(
	gritar,
	endatizar,
	tonarLento

)

const resultadoMenor = composicao(
	gritar,
	tonarLento

)

resultado('cuidado !!!').then(console.log)
resultadoMenor('cuidado !!!').then(console.log)

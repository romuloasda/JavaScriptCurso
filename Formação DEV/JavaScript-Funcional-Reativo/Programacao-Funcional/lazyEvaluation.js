function eager(a, b) {

	// Processamento mais pesado
	const fim = Date.now() + 2500

	while (Date.now() < fim) { }

	const valor = Math.pow(a, 3)
	return valor + b
}

console.log(eager(3, 100))

function lazy(a) {

	// Processamento mais pesado
	const fim = Date.now() + 2500

	while (Date.now() < fim) { }

	const valor = Math.pow(a, 3)
	return function (b) {
		return valor + b

	}
}

console.log(lazy(1)(1000))
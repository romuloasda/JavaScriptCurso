function eager(a, b) {

	// Processamento mais pesado
	const fim = Date.now() + 2500

	while (Date.now() < fim) { }

	const valor = Math.pow(a, 3)
	return valor + b
}

console.time("#1")
console.log(eager(3, 100))
console.timeEnd('#1')

function lazy(a) {

	// Processamento mais pesado
	const fim = Date.now() + 2500

	while (Date.now() < fim) { }

	const valor = Math.pow(a, 3)
	return function (b) {
		return valor + b

	}
}

let lazy3 = lazy(3)

console.time('#2')
console.log(lazy3(100))
console.timeEnd('#2')
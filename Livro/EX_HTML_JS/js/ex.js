const preco = function (grama) {
	const kg = grama / 1000
	const valor = 58.50 * kg

	return `${valor}`
}


console.log(preco(500))

const lan = function (tempo) {
	const hora = 25 / 60
	const resultado = hora * 25
	console.log(hora)
}

lan(3)



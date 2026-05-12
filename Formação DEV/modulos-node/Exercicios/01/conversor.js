const paraDolar = (real) => {
	const dolares = real / 5
	return `O valor de ${real} vale ${dolares} dolares.`
}

const paraReal = (dolar) => {
	const real = dolar * 5
	return `O valor de ${dolar} dolares vale ${real} `
}

module.exports = {
	paraDolar,
	paraReal
}
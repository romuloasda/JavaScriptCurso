function gerarN(min, max) {
	const fator = max - min + 1
	return parseInt(Math.random() * fator) + min
}

console.log(gerarN(1, 10000))
console.log(gerarN(1, 10000))
console.log(gerarN(1, 10000))
console.log(gerarN(1, 10000))
console.log(gerarN(1, 10000))
console.log(gerarN(1, 10000))
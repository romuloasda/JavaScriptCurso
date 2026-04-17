let a = 1
console.log(a)


console.log(typeof p)

const primeiroElemento = ArrayOuString => ArrayOuString[0]

function primeiraLetra(string) {
	return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
	resolve(['Ana ', 'Bia'])
})
	// .then()
	// .then(valor => valor[0])
	// .then(valor => console.log(valor))
	// .then(primeiro => primeiro[0])
	// .then(letra => letra.toLowerCase())
	// .then(letraMinuscula => console.log(letraMinuscula))
	.then(primeiroElemento)
	.then(primeiraLetra)
	.then(letraMinuscula)
	.then(console.log)
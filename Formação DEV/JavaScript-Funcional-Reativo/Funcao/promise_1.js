let a = 1
console.log(a)

let p = new Promise(function (resolve) {
	resolve(['ana', 'bia', 'carlos', 'daniel'])
})
	.then(valor => valor[0])
	.then(primeiro => primeiro[0])
	.then(letra => letra.toUpperCase())
	.then(letraMaiscula => console.log(letraMaiscula))

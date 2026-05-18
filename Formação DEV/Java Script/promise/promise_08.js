// Promise all

function gNumero(min, max, tempo) {
	return new Promise(resolve => {
		setTimeout(() => {
			const fator = max - min + 1
			const aleatorio = parseInt(Math.random() * fator) + min
			resolve(aleatorio)
		}, tempo)
	})
}

console.time('sequencial')
Promise.all([
	gNumero(5, 60, 4000),
	gNumero(1, 60, 1000),
	gNumero(1, 60, 500)
])
	.then(valores => console.log(valores))
	.then(() => console.timeEnd('sequencial'))
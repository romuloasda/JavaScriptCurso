function esperarPor(tempo = 2000) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, tempo)
	})
}

// esperarPor(2000)
// 	.then(() => console.log('Executando Promise...'))
// 	.then(esperarPor)
// 	.then(() => console.log('Executando Promise...'))
// 	.then(esperarPor)


async function executar() {
	await esperarPor(1500)
	console.log('Async/await 1')

	await esperarPor(1500)
	console.log('Async/await 2')

	await esperarPor(1500)
	console.log('Async/await 3')
}

executar()
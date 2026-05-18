function esperarPor(tempo) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, tempo)
	})
}

async function executar() {
	await esperarPor(2000)
	console.log('Depois de 2s...')

	await esperarPor(3000)
	console.log('Depois de 3s ...')

	await esperarPor(1500)
	console.log('Depois de 1.5s...')
}

executar()
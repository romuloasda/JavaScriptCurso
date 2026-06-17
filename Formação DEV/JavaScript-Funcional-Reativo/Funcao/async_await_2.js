function gerarNumero(min, max, numerosProibidos) {
	if (min > max) {
		[max, min] = [min, max]
	}

	return new Promise((resolve, reject) => {
		const fator = max - min + 1
		const aleatorio = parseInt(Math.random() * fator) + min
		resolve(aleatorio)
		if (numerosProibidos.includes(aleatorio)) {
			reject('Numero repetido')
		} else {
			resolve(aleatorio)

		}

	})
}

async function gerarMega(qtdeNumeros) {
	try {
		const numeros = []
		for (let _ of Array(qtdeNumeros).fill()) {
			numeros.push(await gerarNumero(1, 60, numeros))
		}
		return numeros
	} catch (e) {
		throw 'Que chato'
	}
}

// gerarNumero(1, 5, [1, 2, 4])
// 	.then(console.log)
// 	.catch(console.log)

gerarMega(-1)
	.then(console.log)
	.catch(console.log)

function perro(chanceErro) {
	return new Promise((resolve, reject) => {
		if (Math.random() < chanceErro) {
			reject('Ocorreu um erro')
		} else {
			resolve('Tudo certo')
		}
	})
}

perro(0.5)
	.then(
		v => v + '!!!!',
		erro => console.log(`#1: ${erro}`)
	)
	.then(
		v => console.log(v),
		erro => console.log(`#2: ${erro}`)
	)
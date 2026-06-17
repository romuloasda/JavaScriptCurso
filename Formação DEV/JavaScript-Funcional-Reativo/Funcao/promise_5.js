function funcionar(valor, chanceErro) {
	return new Promise((resolve, reject) => {
		if (Math.random() < chanceErro) {
			reject('Ocorreu um erro')
		} else {
			resolve(valor)
		}
	})
}

funcionar('Testando...', 0.5)
	.then(console.log)
	.catch(err => console.log(`Erro ${err}`))
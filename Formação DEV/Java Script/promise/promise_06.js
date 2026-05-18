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
	.then(v => console.log(v))
	.catch(erro => console.log(erro))
	.finally(() => console.log('Fim'))
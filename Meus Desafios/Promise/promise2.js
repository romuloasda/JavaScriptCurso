const fazerDownload = new Promise((resolve, reject) => {
	let sucesso = true
	if (sucesso) {
		resolve(`Arquivo Baixado Com Sucesso`)
	} else {
		reject(new Error('Erro ao realizar o download'))
	}
})

fazerDownload
	.then(console.log)
	.catch(console.log)


const validador = (cupom) => {
	return new Promise((resolve, reject) => {
		if (cupom === 'JS10') {
			resolve('O valo de desconto sera 10')
		} else {
			reject('Cupom inválido ou expirado')
		}
	})
}

validador('J10')
	.then(console.log)
	.catch(console.log)


const promessaDemorada = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Acordei depois de 2 segundos!");
	}, 2000);
});

promessaDemorada
	.then(console.log)


const buscarId = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id === 1) {
				id = { nome: 'Romulo', cargo: 'Dev Sênior' }
				resolve(id.nome)
			} else {
				reject('Usuarios não encontrado')
			}
		}, 2000)
	})
}

buscarId(1)
	.then(console.log)
	.catch(console.log)
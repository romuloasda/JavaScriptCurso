const pedirLanche = new Promise((resolve, reject) => {
	let temEstoque = true; // Se mudar para false, vai dar erro

	if (temEstoque) {
		resolve("🍔 Hambúrguer caprichado entregue!");
	} else {
		reject("❌ Desculpe, o ingrediente acabou.");
	}
});

// Como nós USAMOS a promessa (o cliente esperando o bipe)
pedirLanche
	.then((lanche) => console.log(lanche)) // Se der resolve, cai aqui
	.catch((erro) => console.log(erro));   // Se der reject, cai aqui


const fazerDownload = new Promise((resolve, reject) => {
	let sucesso = false
	if (sucesso === true) {
		resolve('O DOWNLOAD foi concluido com sucesso!!!')
	} else {
		reject('Erro ao realizar o download')
	}
})

fazerDownload
	.then(console.log)
	.catch(console.log)

const verificarCupom = (cupom) => {
	return new Promise((resolve, reject) => {
		if (cupom === 'JS10') {
			resolve(10)
		} else {
			reject('Cupom invalido')
		}
	})
}

verificarCupom('JS1')
	.then(console.log)
	.catch(console.log)

const promessaDemora = new Promise((resolve) => {
	setTimeout(() => {
		resolve('Acordei depois de 2 segundos')
	}, 2000)
})

promessaDemora
	.then(console.log)

const usuario1 = { nome: 'Romulo', cargo: 'Dev Sênior' }

const buscarUsuarioNoBanco = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id === 1) {
				resolve(usuario1)
			} else {
				reject('Usuário não encontrado')
			}
		}, 1500)
	})
}

buscarUsuarioNoBanco(1)
	.then(console.log)
	.catch(console.log)


const pegarNumero = new Promise(resolve => resolve(5));

pegarNumero
	.then(numero => {
		return numero * 2; // Retorna 10
	})
	.then(resultadoDobrado => {
		console.log(resultadoDobrado); // Imprime 10!
	});


const letraMaiuscula = new Promise(resolve => resolve('javaScript'))

letraMaiuscula
	.then((maiuscula) => maiuscula.toUpperCase())
	.then(console.log)





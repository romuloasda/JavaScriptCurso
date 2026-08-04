const fazerDownload = new Promise((resolve, reject) => {
	const sucesso = true

	if (sucesso) { resolve("Arquivo baixado com sucesso!") }
	else { reject("❌ Erro ao realizar o download.") }
})

fazerDownload
	.then(console.log)
	.catch(console.log)

const verificarCumpom = (cupom) => {
	return new Promise((resolve, reject) => {
		if (cupom === 'JS10') { resolve('O seu desconto é no valor de 10') }
		else { reject('Cupom inválido') }
	})
}

verificarCumpom('JS10')
	.then(console.log)
	.catch(console.log)


const transTexto = (texto) => {
	return new Promise((resolve, reject) => {
		if (texto === 'javascript') {
			resolve(texto)
		} else {
			reject('O texto não é javascript')
		}
	})
}

transTexto('javascript')
	.then(texto => {
		return texto.toUpperCase()
	})
	.then(resultado => console.log(resultado))
	.catch(console.log)



const buscarUsuario = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id === 1) {
				resolve({ nome: 'Romulo', cargo: 'Dev Sênior' })
			} else {
				reject("Usuário não encontrado.")
			}
		}, 1500)
	})
}

buscarUsuario(1)
	.then(console.log)
	.catch(console.log)



function assarPizza(sabor) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`A pizza ${sabor} esta assada!`)
		}, 2000)
	})
}

function entregarPizza(statusPizza) {
	return new Promise((resolve, reject) => {
		if (statusPizza.includes('assada')) {
			resolve("Motoboy entregou a pizza com sucesso!")
		} else {
			reject("A pizza não pôde ser entregue.")
		}
	})
}

async function fluxoDoPedido() {
	try {
		const pizza = await assarPizza('Calabresa')
		const entrega = await entregarPizza(pizza)
		console.log(entrega)
	} catch (erro) {
		console.log(erro)
	}
}

fluxoDoPedido()
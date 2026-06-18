// Usando a mesma função buscarUsuarioNoBanco que você criou!
async function executarSistema() {
	try {
		console.log("Buscando...");
		const usuario = await buscarUsuarioNoBanco(1); // Espera os 1.5s e joga o resultado na variável
		console.log(`Usuário encontrado: ${usuario.nome}`);
	} catch (erro) {
		console.log(`Deu ruim: ${erro}`); // Se der reject, cai aqui direto!
	}
}

executarSistema();

const assarPizza = (sabor) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`A pizza de ${sabor} esta assa`)
			reject('A pizza ainda esta assando')
		}, 1000)
	})
}



const entregarPizza = (pizza) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (pizza.includes('assada')) {
				resolve('O moto boy entregou a pizza com sucesso')
			} else {
				reject('A pizza não pode ser entregue.')
			}
		}, 2000)
	})
}


async function fluxoDePedido() {
	try {
		const resultadoAssar = await assarPizza('Calabresa')
		console.log(resultadoAssar)

		const ressultadoEntrega = await entregarPizza(resultadoAssar)
		console.log(ressultadoEntrega)
	} catch (erro) {
		console.log(erro)
	}
}

fluxoDePedido()



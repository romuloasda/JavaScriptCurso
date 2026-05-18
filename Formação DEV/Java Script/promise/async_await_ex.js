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

const assarPizza = (pizza) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Pizza sabor ${pizza} esta assada!`)
		}, 2000)
	})
}



const entregarPizza = (pizza) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (pizza.includes('assada')) {
				resolve("Motoboy entregou a pizza com sucesso!")
			} else {
				reject("A pizza não pôde ser entregue.")
			}
		}, 1000)
	})
}

async function fluxoDePedido() {
	try {
		const resultadoAssar = await assarPizza('Calabresa')

		const resultadoEntrega = await entregarPizza(resultadoAssar)
		console.log(resultadoEntrega)

	} catch (erro) {
		console.error(erro)
	}

}

fluxoDePedido()

const admin = { id: 99, nome: "Chefão" }

const autenticarUsuario = (usuario, senha) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if ((usuario === 'admin') && (senha === 1234)) {
				resolve(admin)
			} else {
				reject("Credenciais inválidas")
			}
		}, 1000)
	})
}

const buscarSaldo = (idUsuario) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (idUsuario === 99) {
				resolve(5000)
			} else {
				reject("Usuário não encontrado ou sem saldo")
			}
		}, 1000)
	})
}


async function fluxoBancario() {
	try {
		const login = await autenticarUsuario('admin', 1234)

		const saldo = await buscarSaldo(login.id)
		console.log(saldo)
	} catch (erro) {
		console.error(erro)
	}
}

fluxoBancario()

const carrinho = [{ nome: 'Teclado', preco: 200 }, { nome: 'Mouse', preco: 100 }]



const calcularTotal = (produtos) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let prod = produtos.map(n => n.preco).reduce((ac, atual) => {
				return ac + atual
			}, 0)
			resolve(`${prod}`)
		}, 1000)
	})
}
async function fecharPedido() {
	const total = await calcularTotal(carrinho)

	console.log(total)
}

fecharPedido()
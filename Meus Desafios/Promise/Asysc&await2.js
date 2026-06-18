// Promise simulada pronta (Mantenha como está):
const realizarSaque = (valor) => {
	return new Promise((resolve, reject) => {
		let saldoAtual = 500;
		if (valor <= saldoAtual) {
			resolve("Saque autorizado! Retire o dinheiro.");
		} else {
			reject("Saldo insuficiente para realizar o saque.");
		}
	});
};

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function caixaEletronico() {
	try {
		const saque = await realizarSaque(600)
		console.log(saque)
	} catch (erro) {
		console.log('Operação cancelada: ' + erro)
	}
}

caixaEletronico()

// Promises simuladas prontas (Mantenha como estão):
const verificarUsuario = (nome) => {
	return new Promise((resolve, reject) => {
		if (nome === "Admin") {
			resolve({ usuario: "Admin", status: "Ativo" });
		} else {
			reject("Usuário não cadastrado no sistema.");
		}
	});
};

const carregarPerfil = (dados) => new Promise(resolve => resolve(`Painel do ${dados.usuario} carregado!`));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function usuario() {
	try {
		const adm = await verificarUsuario('Amin')
		const banco = await carregarPerfil(adm)
		console.log(banco)
	} catch (erro) {
		console.log(erro)
	}
}

usuario()
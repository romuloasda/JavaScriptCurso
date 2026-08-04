const consultarFrete = (cep) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (cep.length === 8) {
				resolve(15)
			} else {
				reject(`CEP inválido!`)
			}
		}, 1000)
	})
}

consultarFrete('12345678')
	.then(cep => console.log('Valor do frete: R$ ' + cep))
	.catch(console.log)


// Functions simuladas prontas (Mantenha como estão):
const processarPagamento = (valor) => {
	return new Promise((resolve, reject) => {
		if (valor > 0) resolve(`Pagamento de R$${valor} aprovado!`);
		else reject("Valor de compra inválido.");
	});
};

const enviarEmailConfirmacao = (cliente) => {
	return new Promise(resolve => resolve(`E-mail de confirmação enviado para ${cliente}.`));
};

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---


async function finalizarCompra(cliente, valor) {
	try {
		const [pagamento, confirmacao] = await Promise.all([
			processarPagamento(valor),
			enviarEmailConfirmacao(cliente)
		])
		console.log(pagamento, confirmacao)
	} catch (erro) {
		console.log('Falha no checkout ' + erro)
	}
}

finalizarCompra('Romulo', 150)

// Functions simuladas prontas (Mantenha como estão):
const checarNivelCombustivel = () => new Promise(resolve => resolve("Tanque: 80%"));
const checarPressaoPneus = () => new Promise(resolve => resolve("Pneus: Calibrados"));
const checarTemperaturaMotor = () => new Promise(resolve => resolve("Motor: Temperatura ideal"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function iniciarPainelCarro() {
	try {
		const [nivelCombustivel, pressaoPneus, temperaturaMotor] = await Promise.all([
			checarNivelCombustivel(),
			checarPressaoPneus(),
			checarTemperaturaMotor()
		])
		console.log(nivelCombustivel, ' | ', pressaoPneus, ' | ', temperaturaMotor)
	} catch (erro) {
		console.log(erro)
	}
}

iniciarPainelCarro()

function aluno(nome) { return new Promise(resolve => resolve(nome)) }
function mensalidade(estaPaga) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (estaPaga === true) resolve('Acesso Liberado! Bem-Vindo')
			else reject('Acesso Negado! Mensalidade Pendente')
		}, 1500)
	})
}

async function validarAcesso(nomeAluno, statusMensalidade) {
	try {
		const [pagamento, atleta] = await Promise.all([
			mensalidade(statusMensalidade),
			aluno(nomeAluno)
		])
		console.log(`${pagamento} ${atleta}`)
	} catch (erro) {
		console.log(erro)
	}
}

validarAcesso('Romulo', true)

const arquivos = ["documento.pdf", "relatorio.csv", "imagem.png"]

const processarArquivo = (nome) => {
	return new Promise(resolve => setTimeout(() => resolve(`Arquivo ${nome} processado`), 1000));
};



async function processarTodosArquivos(mostrarArquivos) {
	try {
		const listaPromises = mostrarArquivos.map(arquivo => processarArquivo(arquivo))

		const resultado = await Promise.all(listaPromises)

		console.log(resultado)
	} catch (erro) {
		console.log(erro)
	}

}

processarTodosArquivos(arquivos)


const criarConta = (email) => new Promise(resolve => resolve({ id: 101, email: email }));
const gerarTokenAcesso = (usuarioId) => new Promise(resolve => resolve(`TOKEN_SECRET_${usuarioId}`));
const buscarPerfil = (token) => new Promise(resolve => resolve({ id: 101, nome: "Romulo", nivel: "Sênior" }));

async function fluxoDeCadastro(email) {
	try {
		const conta = await criarConta(email)
		const token = await gerarTokenAcesso(conta.id)
		const perfil = await buscarPerfil(token)

		console.log(conta, token, perfil)

	} catch (erro) {
		console.log(erro)
	}
}

fluxoDeCadastro('romulo@gmail.com')
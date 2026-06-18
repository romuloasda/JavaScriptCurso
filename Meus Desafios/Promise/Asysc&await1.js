// A promessa demorada já está pronta (Mantenha como está):
const processarDownload = () => new Promise(resolve => resolve("Arquivo baixado!"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---


async function iniciarSistema() {
	try {
		const download = await processarDownload()
		console.log(download)
	} catch (erro) {
		console.log(erro)
	}
}

iniciarSistema()

// As promessas já estão prontas (Mantenha como estão):
const prepararPrato = () => new Promise(resolve => resolve("Lasanha Pronta!"));
const prepararSobremesa = () => new Promise(resolve => resolve("Sorvete Pronto!"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function refeicaoCompleta() {
	try {
		const preparandoPrato = await prepararPrato()
		console.log(preparandoPrato)

		const preparandoSobremesa = await prepararSobremesa()
		console.log(preparandoSobremesa)
	} catch (erro) {
		console.log(erro)
	}
}

refeicaoCompleta()


// Promise simulada pronta (Mantenha como está):
const verificarStatusEntrega = (codigoPedido) => {
	return new Promise(resolve => resolve(`Pedido ${codigoPedido}: Saiu para entrega!`));
};

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function rastrearEncomenda() {
	try {
		const localizacaoEncomenda = await verificarStatusEntrega("BR12345X")
		console.log(localizacaoEncomenda)
	} catch (erro) {
		console.log(erro)
	}
}

rastrearEncomenda()

// Promises simuladas prontas (Mantenha como estão):
const gerarNotaFiscal = () => new Promise(resolve => resolve(98765));
const enviarParaTransportadora = (numeroNota) => {
	return new Promise(resolve => resolve(`Nota ${numeroNota} despachada com sucesso!`));
};

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function processarPedidoLoja() {
	try {
		const numeroNota = await gerarNotaFiscal()
		const enviarNota = await enviarParaTransportadora(numeroNota)
		console.log(enviarNota)
	} catch (erro) {
		console.log(erro)
	}
}

processarPedidoLoja()

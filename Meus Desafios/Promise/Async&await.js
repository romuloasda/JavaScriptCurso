// async function carregarDashboard() {
// 	try {
// 		// Dispara as três ao mesmo tempo e espera a resposta conjunta
// 		const [produtos, usuario, banners] = await Promise.all([
// 			buscarProdutos(),
// 			buscarUsuario(),
// 			buscarBanners()
// 		]);

// 		// Aqui dentro você já tem os três resultados prontos para usar!
// 		console.log(produtos, usuario, banners);
// 	} catch (erro) {
// 		// Se QUALQUER UMA das promessas falhar, o bloco todo cai aqui no catch
// 		console.log("Erro ao carregar alguma parte do sistema:", erro);
// 	}
// }

// carregarDashboard()

// Promises simuladas prontas (Mantenha como estão):
const carregarTexto = () => new Promise(resolve => resolve("Textos da página carregados!"));
const carregarImagens = () => new Promise(resolve => resolve("Imagens pesadas carregadas!"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function renderizarTexto() {
	try {
		const [texto, imagens] = await Promise.all([
			carregarTexto(),
			carregarImagens()
		])
		console.log(`${texto} \n${imagens} `)

	} catch (erro) {
		console.log(erro)
	}
}

renderizarTexto()


// Promises simuladas prontas (Mantenha como estão):
const buscarVendas = () => new Promise(resolve => resolve([100, 200, 300]));
const buscarDespesas = () => new Promise(resolve => resolve([50, 20]));
const verificarIntegridade = () => new Promise((resolve, reject) => reject("Banco de dados corrompido!"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function gerarRelatorio() {
	try {
		const [vendas, despesas, integridade] = await Promise.all([
			buscarVendas(),
			buscarDespesas(),
			verificarIntegridade()
		])

		console.log(`${vendas}\n${despesas}\n${integridade}`)
	} catch (erro) {
		console.log('Fala critica na geração do relatório: ' + erro)
	}
}

gerarRelatorio()


// Funções simuladas prontas (Mantenha como estão):
const autenticarUsuario = (token) => {
	return new Promise((resolve, reject) => {
		if (token === 986532) resolve("Alex");
		else reject("Token expirado!");
	});
};

const buscarCarrinho = (usuario) => new Promise(resolve => resolve(`Carrinho do ${usuario}: 3 Itens`));
const buscarRecomendacoes = () => new Promise(resolve => resolve("Recomendações: 5 Smartphones em promoção"));

// --- MONTE SEU GRANDE MOTOR ASSÍNCRONO AQUI EMBAIXO ---

async function carregarApp(token) {
	try {
		const nomeUsuario = await autenticarUsuario(token)
		const [carrinho, recomendacoes] = await Promise.all([
			buscarCarrinho(nomeUsuario),
			buscarRecomendacoes()
		])

		console.log(`Usuario ${nomeUsuario}\n${carrinho}\n${recomendacoes}`)
	} catch (erro) {
		console.log(erro)
	}
}

carregarApp(986532)
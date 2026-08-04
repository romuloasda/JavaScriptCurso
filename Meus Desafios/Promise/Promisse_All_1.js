// Promises simuladas prontas (Mantenha como estão):
const carregarTexto = () => new Promise(resolve => resolve("Textos da página carregados!"));
const carregarImagens = () => new Promise(resolve => resolve("Imagens pesadas carregadas!"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function renderizarPagina() {
	try {
		const [texto, imagem] = await Promise.all([
			carregarTexto(),
			carregarImagens()
		])

		console.log(texto, imagem)
	} catch (erro) {
		console.log(erro)
	}
}

renderizarPagina()

// Promises simuladas prontas (Mantenha como estão):
const buscarVendas = () => new Promise(resolve => resolve([100, 200, 300]));
const buscarDespesas = () => new Promise(resolve => resolve([50, 20]));
const verificarIntegridade = () => new Promise((resolve, reject) => reject("Banco de dados corrompido!"));

// --- MONTE SUA FUNÇÃO ASSÍNCRONA AQUI EMBAIXO ---

async function gerarRelatorio() {
	try {
		const [Vendas, Despesas, Integridade] = await Promise.all([
			buscarVendas(),
			buscarDespesas(),
			verificarIntegridade()
		])

		console.log(Vendas, Despesas, Integridade)

	} catch (erro) {
		console.log(erro)
	}
}

gerarRelatorio()
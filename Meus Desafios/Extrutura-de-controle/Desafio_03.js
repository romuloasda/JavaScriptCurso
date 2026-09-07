let cont = 0
const formatado = {}
const conte = "js python js rust js rust ruby"


const conte_objeto = ((frase, palavra) => {
	palavra = palavra.toLowerCase()
	frase = frase.toLowerCase()
	let qtd = frase.split(palavra).length - 1

	if (frase.includes(palavra)) {
		formatado[palavra] = qtd
	}

})

conte_objeto(conte, 'js')
conte_objeto(conte, 'Python')
conte_objeto(conte, 'rust')
conte_objeto(conte, 'ruby')
console.log(formatado)



const usuarios = [
	{ nome: "Lucas", nivel: "pleno" },
	{ nome: "Beatriz", nivel: "junior" },
	{ nome: "Ana", nivel: "pleno" },
	{ nome: "Marcos", nivel: "senior" },
	{ nome: "Carla", nivel: "junior" }
];


const usuariosFormatados = {
	pleno: [],
	senior: [],
	junior: [],
}

for ({ nome, nivel } of usuarios) {
	const nomeNivel = { nome, nivel }
	if (nivel === 'pleno') {
		usuariosFormatados.pleno = [...usuariosFormatados.pleno, nomeNivel]
	} else if (nivel === 'junior') {
		usuariosFormatados.junior = [...usuariosFormatados.junior, nomeNivel]
	} else if (nivel === 'senior') {
		usuariosFormatados.senior = [...usuariosFormatados.senior, nomeNivel]
	}
}

console.table(usuariosFormatados)

const usuariosFormatados2 = Object.groupBy(usuarios, ({ nivel }) => nivel);

console.table(usuariosFormatados2);

const produtos = [
	{ nome: "Monitor", preco: 900, avaliacao: 4.5 },
	{ nome: "Teclado", preco: 250, avaliacao: 4.8 },
	{ nome: "Mouse", preco: 250, avaliacao: 4.2 },
	{ nome: "Headset", preco: 400, avaliacao: 4.8 },
	{ nome: "Webcam", preco: 250, avaliacao: 4.9 }
];

const comSorte = produtos.toSorted((a, b) => {
	if (a.preco === b.preco) {
		return b.avaliacao - a.avaliacao
	}
	return a.preco - b.preco

})

console.log(comSorte)


// Resolucao com IA

function contarFrequencia(texto) {
	const palavras = texto.toLowerCase().split(" ");
	const tabelaFrequencia = {};

	for (const palavra of palavras) {
		// Se a palavra já existe no objeto, soma 1; caso contrário, inicia com 1
		tabelaFrequencia[palavra] = (tabelaFrequencia[palavra] || 0) + 1;
	}

	return tabelaFrequencia;
}

const resultado = contarFrequencia("js python js rust js rust ruby");
console.log(resultado);
// { js: 3, python: 1, rust: 2, ruby: 1 }

const entendo = {}
entendo['texto'] = (entendo['texto'] || 0) + 1
entendo['texto'] = (entendo['texto'] || 0) + 1
console.log(entendo)



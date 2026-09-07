function contarFrequencia(texto) {
	const palavras = texto.toLowerCase().split(" ");
	const tabelaFrequencia = {};

	for (const palavra of palavras) {
		// Se a palavra já existe no objeto, soma 1; caso contrário, inicia com 1
		tabelaFrequencia[palavra] = (tabelaFrequencia[palavra] || 0) + 1; // essa expressao verifica se o indice existe ou nao, caso nao existe ele cria o indice.
	}

	return tabelaFrequencia;
}

const resultado = contarFrequencia("js python js rust js rust ruby");
console.log(resultado);
// { js: 3, python: 1, rust: 2, ruby: 1 }
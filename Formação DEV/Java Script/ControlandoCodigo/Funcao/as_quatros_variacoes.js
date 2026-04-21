// #1 - Função SEM parametro e Sem retorno

function exibirBomDia() {
	console.log('Bom dia')
}

exibirBomDia()

//  com parametro e sem retorno

function exibirBomDiapara(nome) {
	console.log(`Bom dia ${nome}`)
}

// sem parametro e com retorno

function numeroRadon() {
	const gerarNumero = parseInt(Math.random() * 10000)
	return gerarNumero
}

console.log(numeroRadon())

// Com parametro e com retorno

function nRandon(numero) {
	const gerarN = Math.random(numero)
	return gerarN
}

console.log(nRandon().toFixed(2))
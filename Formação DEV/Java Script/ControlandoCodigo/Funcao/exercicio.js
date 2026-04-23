const saudar = (nome) => console.log(`Olá ${nome}`)

saudar('Romulo')

const celsiuFahrenheit = (c) => {
	c = (c * 1.8) + 32
	return `${c}`
}

console.log(celsiuFahrenheit(10, 5))

const maiorIdade = (idade) => {
	if (idade > 18) {
		return true
	} else {
		return false
	}
}

console.log(maiorIdade(12))

const notas = [7, 8, 9]

const calculandoTudo = notas.reduce(function (calc, tudo) {
	return (calc + tudo) / notas.length
})

console.log(calculandoTudo.toFixed(2))

const aplicarDesconto = (valor) => {
	valor = valor - (valor * 10) / 100
}


const gerarRelatorio = [100, 200, 300]

const gera = gerarRelatorio.map(function (num) {
	return num - aplicarDesconto
})

console.log(gera)



// Chamar função sem parametro

function exiCOn() {
	return `FUNCIONOU!!!!`
}

function excMen(callback) {
	console.log(`Estou recebendo ${callback}`)
}

excMen(exiCOn())

function dobrar(numero) {
	return numero * 2
}

// Chamar funcação detro da outra com parametro

function processar(valor, ajudante) {
	console.log(`O resultado ${ajudante(valor)}`)
}

processar(5, dobrar)

function emGrito(texto) {
	return texto.toUpperCase();
}

function formatar(string, callback) {
	return callback(string);
}

console.log(formatar("Java Script", emGrito))

function metade(n) {
	return n / 2
}

function exibir(num, acao) {
	console.log(`A metade É ${acao(num)} `)
}

exibir(10, metade)

function caixaAlta(texto) {
	return texto.toUpperCase()
}

function caixaBaixa(texto) {
	return texto.toLowerCase()
}

function anunciar(texto, transformador) {
	console.log(`${transformador(texto)}`)
}

anunciar("o java script é legal", caixaAlta)

anunciar("O JAVA SCRIPT É LEGAL", caixaBaixa)

const triplicar = n => {
	return n * 3
}

const elevarAoQuadrado = n => {
	return n * n
}

const processarNumero = (num, operacao) => {
	console.log(`${operacao(num)}`)
}

processarNumero(9, triplicar)
processarNumero(9, elevarAoQuadrado)
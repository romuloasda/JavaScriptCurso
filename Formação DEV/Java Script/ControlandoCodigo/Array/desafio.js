const notas = [0, 1, 2, 3, 4, 5, 6,]

function maisAlgo() {
	for (let cont in notas) {
		console.log(`${notas[cont]}`)
	}
}

maisAlgo()

notas.forEach(function (elementos, i, array) {
	console.log(`opa ${elementos} ${maisAlgo()} `)
})

function gritarResultado() {
	return `ATENÇÂO !!!!!!!!!!`
}

function processarAviso() {
	console.log(`O codigo funcionou ${gritarResultado()}`)
}

processarAviso()

function dobrar(numero) {
	return numero * 2
}

function triplicar(numero) {
	return numero * 3
}

function resultado(numero) {
	console.log(`${dobrar(numero)} ${triplicar(numero)}`)
}

resultado(2)

function checarSenha(senha) {
	if (senha === "1234") {
		return true
	} else {
		return false
	}
}

function sistemaSegurança(senha) {
	if (senha === checarSenha()) {
		return true
	} else {
		return false
	}
}

console.log(sistemaSegurança("1234"))
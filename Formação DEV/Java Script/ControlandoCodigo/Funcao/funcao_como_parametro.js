function exibirNoConsole(funcao) {
	if (typeof funcao === 'function') {
		const resultado = funcao()
		console.log(resultado)
	}
}

function bomDia() {
	return 'BOM DIA!!'
}

exibirNoConsole(bomDia)


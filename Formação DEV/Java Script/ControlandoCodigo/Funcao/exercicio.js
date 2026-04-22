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




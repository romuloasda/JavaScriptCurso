const data = new Date()
data.setDate(data.getDate() + 3)
console.log(`A sua reunião foi marcada para ${data.toLocaleDateString('pt-BR', { weekday: 'long' })}`)

if (data.toLocaleDateString('pt-BR', { weekday: 'long' }) === 'domingo') {
	console.log('Sua reuniao do domingo vai ser na segunda')
}

function exibirRelogiaDigital() {
	const relogio = new Date()
	const hora = String(relogio.getHours()).padStart(2, '0')
	const minutos = String(relogio.getMinutes()).padStart(2, '0')
	const segundos = String(relogio.getSeconds()).padStart(2, '0')
	let horaAtual = `${hora}:${minutos}:${segundos}`
	console.log("HORA CERTA: " + horaAtual)
}

exibirRelogiaDigital()

function calculandoData(dia, mes, ano) {
	const futuro = new Date(ano, mes - 1, dia)
	const diaDeHoje = new Date()

	let diasFaltando = futuro.getTime() - diaDeHoje.getTime()
	const resultado = Math.ceil(diasFaltando / (1000 * 60 * 60 * 24))

	if (resultado > 0) {
		console.log(`Sua fatura vence em ${resultado} dias`)
	} else {
		console.log("Atenção: Sua fatura já venceu!")
	}

}

calculandoData(15, 12, 2026)




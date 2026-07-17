const data = new Date()
let ano = data.getFullYear()
let dia = data.getDate()

console.log(`Hoje o dia é ${dia} e o ano ${ano}.`)

const aniversario = new Date(2026, 11, 15)
console.log(aniversario.toLocaleDateString('pt-br'))

function obterHoraAtual() {
	const agora = new Date();

	// Captura as horas e minutos e garante o formato com dois dígitos (ex: 09:05)
	let horaAtual = String(agora.getHours()).padStart(2, '0');
	let minutoAtual = String(agora.getMinutes()).padStart(2, '0');

	return `O servidor registrou a ação às: ${horaAtual}:${minutoAtual}`;
}

console.log(obterHoraAtual());

const quantosDiasDaltam = () => {
	const diaDeHoje = new Date()
	const niversario = new Date(2026, 11, 15)

	const diasFaltando = niversario.getTime() - diaDeHoje.getTime()
	const resultado = diasFaltando / (1000 * 60 * 60 * 24)

	if (Number.isInteger(resultado)) {
		return `Faltam ${resultado} dias para o meu aniversário!`
	} else {
		let numero = Math.trunc(resultado)
		return `Faltam ${numero} dias para o meu aniversário!`
	}


}
console.log(quantosDiasDaltam())

const boletoHoje = new Date()
boletoHoje.setDate(boletoHoje.getDate() + 15)

console.log(boletoHoje.toLocaleDateString('pt-br'))

const natal = new Date(2026, 11, 25)

if (natal.getDay() === 0 || natal.getDay() === 6) {
	console.log("O Natal de 2026 vai cair em um fim de semana!")
} else {
	console.log("O Natal de 2026 será em um dia útil.")
}

const happyBirday = new Date(2026, 11, 15)
const diaExato = happyBirday.toLocaleDateString('pt-BR', { weekday: 'long' })

console.log(`Em 2026, meu aniversário vai cair em uma: ${diaExato} `)


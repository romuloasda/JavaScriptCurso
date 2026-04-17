// Qtde Mili desde 1 de janeiro de 1970

let quantidade = 0
const dataNoFuturo = Date.now() + 3000

while (Date.now() < dataNoFuturo) {
	quantidade++
}

console.log('QUANTIDADE: ', quantidade)
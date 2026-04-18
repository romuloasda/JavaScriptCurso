let quantidade = 0
const dataNoFuturo = Date.now() + 3000

do {
	quantidade++
} while (Date.now() < dataNoFuturo)

console.log('QUANTIDADE: ', quantidade)
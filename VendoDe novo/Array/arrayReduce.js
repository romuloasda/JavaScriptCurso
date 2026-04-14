const precos = [100, 250, 500, 1000]

// O primeiro parâmetro é o acumulador, o segundo é o item atual
const somaTotal = precos.reduce(function(acumulador, atual) {
    console.log(`${acumulador} + ${atual}`)
    return acumulador + atual
}, 0) // Esse '0' é o valor inicial do acumulador

console.log(somaTotal) // 1850

// 

const compras = [100, 250, 500, 1000, 50]

const acimaDeCem = compras.filter(function(cem) {
	return cem > 100
})

console.log(acimaDeCem)

const imposto = acimaDeCem.map(function(imp) {
	return imp * 1.05
})

console.log(imposto)

const calcTudo = imposto.reduce(function(calc, tudo) {
	console.log(`${calc} + ${tudo}`)
	return calc + tudo
})

console.log(calcTudo)

// 

const totalNotaFiscal = compras
    .filter(valor => valor > 100)      // Filtra
    .map(valor => valor * 1.05)       // Transforma
    .reduce((total, atual) => total + atual, 0) // Agrega

console.log(`Valor total da nota: R$ ${totalNotaFiscal.toFixed(2)}`)
const numeros = [1, 2, 3, 4]

// O map cria um novo array 'dobro'
const dobro = numeros.map(function(num) {
    return num * 2 // É OBRIGATÓRIO usar o return para transformar o valor
})

console.log(numeros) // [1, 2, 3, 4] (Original intacto)
console.log(dobro)   // [2, 4, 6, 8] (Novo array transformado)

// 

const precos = [100, 250, 500, 1000]

const cDesconto = precos.map(function (des) {
    const valorComDesconto = des * 0.9
    // toFixed(2) garante duas casas decimais
    // replace('.', ',') troca o ponto da decimal por vírgula
    return `R$ ${valorComDesconto.toFixed(2).replace('.', ',')}`
})


console.log(cDesconto)

cDesconto.forEach(function (pre) {
	console.log(`O preco com deconto é ${pre}`)
})
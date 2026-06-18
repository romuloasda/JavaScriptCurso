const numeros = [1, 2, 3, 4]

// 1. forEach apenas exibe
numeros.forEach(n => console.log(`Número: ${n}`))

// 2. map transforma (dobra os valores)
const dobros = numeros.map(n => n * 2) // [2, 4, 6, 8]

// 3. filter seleciona (apenas maiores que 2)
const maiores = numeros.filter(n => n > 2) // [3, 4]

// 4. reduce agrega (soma tudo)
const somaTotal = numeros.reduce((acumulador, atual) => acumulador + atual, 0) // 10

const passos = [100, 250, 500, 1000]

passos.forEach(n => console.log(`Você caminhou ${n} hoje.`))

const valoresDolar = [10, 20, 50, 100]

const valoresReal = valoresDolar.map(n => n * 5)
console.log(valoresReal)

const idades = [12, 18, 15, 22, 14, 30]

const maioresIdade = idades.filter(n => n >= 18)
console.log(maioresIdade)

const contas = [25, 15, 80, 10]
const total = contas.reduce((ac, atual) => ac + atual, 0)
console.log(total)

const cuponsBrutos = [50, 150, 200, 30, 500, 80, 1000, 45]

const resultadoFinal = cuponsBrutos
	.filter(n => n > 100)
	.map(n => n * 1.10)
	.reduce((ac, atual) => ac + atual, 0)

console.log(resultadoFinal)
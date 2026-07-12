const carros = [
	{ modelo: 'Sandeiro', preco: 40000 },
	{ modelo: 'Celta', preco: 55000 },
	{ modelo: 'Gol', preco: 65000 },
	{ modelo: 'Versa', preco: 80000 }
]

const ano = [
	{ ano: 2018 },
	{ ano: 2025 },
	{ ano: 2015 },
	{ ano: 2020 }
]

console.log(carros.modelo)

const filte = carros.filter(e => e.modelo === 'Sandeiro')

console.log(filte)

const carroAtuliazdo = [...carros, ...ano]
console.log(carroAtuliazdo)
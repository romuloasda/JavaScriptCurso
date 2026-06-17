// Arrow function

const felizNatal = () => console.log('Feliz Natal')
felizNatal()

const saudacao = (nome) => 'Fala ' + nome + ', blz'
console.log(saudacao('Maria'))

const somar = numeros => {
	console.log(Array.isArray(numeros))
	let total = 0
	for (let n of numeros) {
		total += n
	}
	return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


const aray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let todos = 0
for (let i of aray) {
	todos += i

}

console.log(todos)


const potencia = (base) => {
	return function (exp) {
		return Math.pow(base, exp)
	}
}

// this
Array.prototype.ultimo = function () {
	console.log(this[this.length - 1])
}
const numeros = [1, 2, 3]
numeros.ultimo()
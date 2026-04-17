console.log(typeof Object)
console.log(typeof new Object)

console.log(Object.prototype, new Object().__proto__)
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('helena'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())
console.log(['a', 'b', 'c'].first())

// String.prototype.toString = function () {
	// return 'Lascou tudo'
// }

// Exercicios IA

String.prototype.prefixarVTR = function () {
	return "VTR-" + this
}

console.log('105'.prefixarVTR())

Number.prototype.reais = function () {
	return "R$" + this
}

console.log(150.00.reais())

String.prototype.mascarar = function () {
	return this.substring(0, 4) + "****"
}

const cpf = "209.209.098.76"
console.log(cpf.mascarar())
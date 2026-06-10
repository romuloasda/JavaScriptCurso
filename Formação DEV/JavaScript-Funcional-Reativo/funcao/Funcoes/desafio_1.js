// somar () () ()

function somar(a) {
	return function (b) {
		return function (c) {
			return a + b + c
		}
	}
}

let resultado = somar(5)(6)(7)
console.log(resultado)

const mult = (a) => {
	return function (b) {
		return a * b
	}
}

const div = (a) => {
	return function (b) {
		return a / b
	}
}

let resultado2 = mult(5)(5) + div(50)(5)
console.log(resultado2)
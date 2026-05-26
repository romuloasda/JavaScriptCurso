module.exports = {
	resto: function (a, b) {
		return a % b
	},

	pot: function (a, b) {
		const pa = BigInt(Math.pow(a, a)).toString().slice(0, 4)
		const pb = BigInt(Math.pow(b, b)).toString().slice(0, 4)
		return `POTENCIA DE X ${pa}, PROTENCIA DE Y ${pb}`
	},

	texto: 'Eu sou o calculo complementar!'
}


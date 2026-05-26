// ex 02

const logger = require('./logger')

const div = function (a, b) {
	const res = a / b
	if (b === 0) {
		console.log(logger('O b foi = 0', 'erro'))
		return null
	} else {
		console.log(logger('Resposta aceita o calculo vai ser executato....', 'info'))
		return `O resultado é ${res}`
	}
}

module.exports = {
	div,
}
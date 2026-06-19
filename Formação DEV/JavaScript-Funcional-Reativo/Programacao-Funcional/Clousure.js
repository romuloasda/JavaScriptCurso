// Clousure é quando uma função 'lembra'
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const somarXMais3 = require('./clousure_escopo')

const x = 1000
function fora() {
	const x = 97
	function somarXMais3() {
		return x + 3
	}

	return somarXMais3(
}

console.log(somarXMais3()) //
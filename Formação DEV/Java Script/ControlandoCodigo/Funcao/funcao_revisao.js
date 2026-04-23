
//Function Declaration
function fale() {
	console.log('BOM DIA')
}

fale()

//  Function Expression

const faleTb = function () {
	console.log('BOA tARDE')
}

faleTb()

function somar(a, b) {
	return a + b
}

let resultado = somar(5, 5)
console.log(resultado)

function executar(x) {
	if (typeof x === 'function') {
		return x()
	}
}

executar(fale)
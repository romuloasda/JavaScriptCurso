const bomDia = function () {
	console.log('Bom Dia')
}

const boaTarde = function () {
	console.log('Boa tarde')
}
// Passar uma Function como parametro para outra
function executar(fn) {
	if (typeof fn === 'function') {
		fn()
	}
}

executar(3)
executar(bomDia)
executar(boaTarde)

// Retornar uma funcao a apartir de uma outra funcao

function potencia(base) {
	return function (exp) {
		return Math.pow(base, exp)
	}
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
let polidromo = 'romulo'
let pa = ""


// for (polidromos of polidromo) {
// 	let i = polidromo.length
// 	let lowCase = polidromos.toLowerCase()
// 	pa = pa + lowCase
// 	console.log(pa)

// }

// console.log(polidromo.length)

// for (let i = polidromo.length - 1; i >= 0; i--) {
// 	pa += polidromo[i].toLowerCase()
// 	if (pa === polidromo.toLowerCase()) {
// 		let m = pa.charAt(0).toUpperCase() + pa.slice(1)
// 		console.log(`É um palidromo: ${m}`)
// 	}
// }

const testePalidromo = (texto) => {
	let palavra = ''
	for (let i = texto.length - 1; i >= 0; i--) {
		palavra += texto[i].toLowerCase()
	}
	palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1)

	if (palavra.toLowerCase() === texto.toLowerCase()) {
		console.log('A palavra é um palidromo')
	} else {
		console.log('Não é um palidromo')
	}
	return `${palavra}`
}

console.log(testePalidromo('arara'))

function newPalidromo(texto) {
	const validador = texto.split("").reverse().join("").toLowerCase()
	if (validador === texto.toLowerCase()) {
		return `O ${texto} é um palidromo`
	} else {
		return `Não é um palidromo`
	}

}

console.log(newPalidromo('AMA'))

function ternarioPalidromo(texto) {
	const validando = texto.split('').reverse().join('').toLowerCase()
	return validando === texto ? 'isso é um palidromo' : 'Isso nao é um palidromo'
}

console.log(ternarioPalidromo('amaa'))
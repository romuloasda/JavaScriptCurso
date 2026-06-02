function conversor(numero, base) {
	let num = parseInt(numero, base)
	if (base === 2) {
		let bin = numero.toString(2)
		console.log(bin)
	} else if (base === 8) {
		let oct = numero.toString(8)
		console.log(oct)
	} else if (base === 10) {
		let baseDez = numero.toString(10)
		console.log(baseDez)
	} else if (base === 16) {
		let hexa = numero.toString(16).toUpperCase()
		console.log(hexa)
	}
}

conversor()


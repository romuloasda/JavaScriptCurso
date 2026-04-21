function conceito(nota) {
	if ((nota > 10) || (nota < 0)) {
		return null
	}

	if (nota === 10) {
		console.log(`NOTA: ${Math.ceil(nota)}(A+) `)
	} else if (nota >= 9) {
		console.log(`NOTA: ${Math.ceil(nota)}(A) `)
	} else if (nota >= 8) {
		console.log(`NOTA: ${Math.ceil(nota)}(B+)`)
	} else if (nota >= 7) {
		console.log(`NOTA: ${Math.ceil(nota)}(B)`)
	} else if (nota >= 6) {
		console.log(`NOTA: ${Math.ceil(nota)}(C+)`)
	} else if (nota >= 5) {
		console.log(`NOTA: ${Math.ceil(nota)}(C)`)
	} else if (nota >= 4) {
		console.log(`NOTA: ${Math.ceil(nota)}(D+)`)
	} else if (nota >= 3) {
		console.log(`NOTA: ${Math.ceil(nota)}(D)`)
	} else if (nota >= 2) {
		console.log(`NOTA: ${Math.ceil(nota)}(E+)`)
	} else if (nota >= 1) {
		console.log(`NOTA: ${Math.ceil(nota)}(F)`)
	}
}

conceito(11)
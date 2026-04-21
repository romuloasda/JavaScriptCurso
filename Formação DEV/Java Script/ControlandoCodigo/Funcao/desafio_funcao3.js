const mediaFinal = (n) => {
	if (n >= 7) {
		return `APROVADO`
	} else if (n > 4) {
		return 'Recuperacao'
	} else if (n < 4) {
		return 'Reprovado'
	}
}

const notas = (n1, n2, n3) => {
	let media

	if (n1 <= n2 && n1 <= n3) {
		media = (n2 + n3) / 2
	} else if (n2 <= n1 && n2 <= n3) {
		media = (n1 + n3) / 2
	} else if (n3 <= n1 && n3 <= n2) {
		media = (n1 + n2) / 2
	}
	return media
}


const mediaParaStatus = mediaFinal(Math.ceil(notas(10, 0, 10)))

console.log(mediaParaStatus)
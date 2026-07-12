const anuncio = prompt("Anuncio")
let numPalavras = 0
const tam = anuncio.length

for (leti = 0; i < tam; i++) {
	if (anuncio.charAt(i) == " ") {
		numPalavras++
	}
}

alert(`Anuncio: ${anuncio}\nN Palavras ${(numPalavras + 1)}`)



while (true) {
	const continuar = prompt('Continuar S/N')
	if (continuar.toUpperCase == "N") {
		break;
	}
}
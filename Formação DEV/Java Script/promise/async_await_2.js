// Uma função async sempre vai retornar uma promise

// https://bible-api.com/matt 25:31-33,46
async function obterVersiculo(livro, cap, versiculo) {
	const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`

	const resposta = await fetch(url)
	const dados = await resposta.json()
	return dados.verses[0].text
	// .then(resposta => resposta.json())
	// .then(dados => dados.verses[0])
	// .then(versiculo => versiculo.text)

}

async function executar() {
	const texto = await obterVersiculo('luke', 1, 1)
	console.log(texto)
}

executar()
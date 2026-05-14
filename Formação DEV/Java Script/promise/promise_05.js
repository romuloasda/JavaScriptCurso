// fetch

const url = 'https://bible-api.com/matt 25:31-33,46'

fetch(url)
	.then(resposta => resposta.json())
	.then(dados => console.log(dados.verses[0].text))
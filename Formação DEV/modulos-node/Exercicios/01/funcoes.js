const media = [{ nome: 'Ana', notas: [8, 9] }, { nome: 'Beto', notas: [5, 6] }]

const resultado = media.forEach(function (n) {
	console.log((n.notas[0] + n.notas[1]) / 2)
})

module.exports = {
	media,
	resultado
}
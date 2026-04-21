
// funcao: 3 parametros => mediaSimples => console.log
// funcao; 3 parametros => mediaPronderada => console.log

const mediaSimples = function (a, b, c) {
	let media = (a + b + c) / 3
	console.log(media)
}

mediaSimples(3, 3, 3)
mediaSimples(12, 12, 6)



const mediaPronderada = function (a, b, c) {
	let mediaP = ((a * 3) + (b * 2) + (c * 1)) / 6
	console.log(mediaP.toFixed(2))
}

mediaPronderada(10.2, 5.5, 8.8)

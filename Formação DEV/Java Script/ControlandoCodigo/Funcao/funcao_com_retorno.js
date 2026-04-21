const mediaSimples = (a, b, c) => {
	let media = (a + b + c) / 3
	return media
}

console.log(mediaSimples(10, 10, 10))

const nota1 = mediaSimples(7, 8, 9)
const nota2 = mediaSimples(6, 9, 3)
const mediaFinal = Math.ceil(mediaSimples(nota1, nota2, 0))

console.log(mediaFinal)
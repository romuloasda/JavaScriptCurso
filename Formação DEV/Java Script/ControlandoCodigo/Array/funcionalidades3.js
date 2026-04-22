const nome = ['Ana', 'Bia', 'Carlos', 'Daniel']

function paraCadaElemento(elemento, indice, array) {
	console.log(elemento, indice, array)
}

nome.forEach(function (elemento, indice, array) {
	console.log(indice, elemento)
})
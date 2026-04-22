const notas = [10, 3.5, 5.6, 7.8, 9.7, 6.8]

// MOTRA O INDICE DO ARRAY
for (let indice = 0; indice < notas.length; indice++) {
	console.log(indice)
}

for (let indice in notas) {
	console.log(indice)
}

// Mostra os elementos do array

for (let i = 0; i < notas.length; i++) {
	console.log(notas[i])
}

for (let array of notas) {
	console.log(array)
}
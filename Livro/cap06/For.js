const lista = ['Leite', 'Milho', 'Leite de Coco', 'Canela', 'Creme de leite', 'Fuba']

for (let listas of lista) {
	console.log(listas)
}

const listaOrganizada = lista.forEach((e, i) => { console.log(`${i + 1}. ${e}`) })
console.log(listaOrganizada)
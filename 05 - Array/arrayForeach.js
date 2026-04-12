const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice, /*array*/) {
    console.log(`${indice + 1}. ${nome} `)
	// console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)

const exibirAprovados2 = (nome, indice) => console.log(`${indice + 1}. ${nome}`)
aprovados.forEach(exibirAprovados2)

const exibirAprovados3 = (nome, indice) => console.log(`${indice + 1}. ${nome}`)
aprovados.forEach(exibirAprovados3)
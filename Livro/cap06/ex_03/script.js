const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = [] // 1. Corrigido para "carros" (plural)

frm.addEventListener("submit", (e) => {
	e.preventDefault()

	const modelo = frm.inModelo.value
	const preco = Number(frm.inPreco.value)
	carros.push({ modelo, preco })

	frm.inModelo.value = ""
	frm.inPreco.value = ""
	frm.inModelo.focus() // 3. Corrigido para buscar a partir do 'frm'

	frm.btLista.dispatchEvent(new Event('click'))
})

frm.btLista.addEventListener("click", (e) => {
	if (carros.length == 0) {
		alert('Não há carros na lista')
		return
	}

	// 2. Corrigido: Adicionado o 'return' dentro do reduce
	const lista = carros.reduce((ac, carro) => {
		return ac + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n"
	}, "")

	resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", e => {
	const maximo = Number(prompt("Qual o valor máximo que o cliente desejar pagar?"))

	if (maximo == 0 || isNaN(maximo)) {
		return
	}

	const carrosFilter = carros.filter(carro => carro.preco <= maximo)

	if (carrosFilter.length == 0) {
		alert('Não há carros com preco inferior ou igual ao solicitado')
		return
	}

	let lista = ''

	for (const carro of carrosFilter) {
		lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)} \n`
	}

	resp.innerText = `Carros Até R$: ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btLista.addEventListener("click", () => {
	if (carros.length == 0) {
		alert('Não há carros na lista')
		return
	}

	const lista = carros.reduce((ac, carro) => {
		ac + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n"
	}, "")

	resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})
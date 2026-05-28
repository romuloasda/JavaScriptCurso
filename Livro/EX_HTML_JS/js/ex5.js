const frm = document.querySelector("form")
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
	const medicamento = frm.inMedicamento.value
	const preco = Number(frm.inPreco.value)
	const entrega = frm.inEntrega.value

	const promocao = (preco * 0.45)

	let taxaEntrega;

	// const bairro = prompt("Bairro de entrega")

	switch (entrega) {
		case 'Centro':
			taxaEntrega = 5.00
			break;
		case 'Janga':
			taxaEntrega = 7.00
			break;
		case 'Pau amarelo':
			taxaEntrega = 10.00
			break
		default:
			taxaEntrega = 8.00
	}

	resp1.textContent = `${medicamento} e ${preco} 2 por ${promocao} e a taxa de entrega é ${taxaEntrega}`

	e.preventDefault()
})
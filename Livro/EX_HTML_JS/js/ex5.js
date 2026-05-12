const frm = document.querySelector("form")
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
	const medicamento = frm.inMedicamento.value
	const preco = Number(frm.inPreco.value)

	const promocao = (preco * 0.45)

	resp1.textContent = `${medicamento} e ${preco} 2 por ${promocao}`

	e.preventDefault()
})
const frm = document.querySelector("form")
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
	const preco = Number(frm.inPreco.value)
	const tempo = Number(frm.inTempo.value)

	const blocode15 = Math.ceil(tempo / 15)
	const total = blocode15 * preco

	resp1.textContent = `${preco} e ${tempo} e ${total}`

	e.preventDefault()
})
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
	const produto = frm.inProduto.value
	const preco = Number(frm.inValor.value)

	const terceiroProduto = preco * 0.50
	const total = (preco * 2) + terceiroProduto

	resp1.textContent = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`
	resp2.textContent = `O 3º produto custa apenas R$: ${terceiroProduto.toFixed(2)}`

	e.preventDefault()
})
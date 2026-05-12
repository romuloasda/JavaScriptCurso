const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
	const quilo = Number(frm.pkg.value)
	const consumo = Number(frm.pgrama.value)

	const valor = (quilo / 1000) * consumo
	resp1.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

	e.preventDefault()

})
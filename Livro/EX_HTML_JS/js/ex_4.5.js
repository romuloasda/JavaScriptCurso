const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const numero = Number(frm.inNumero.value)
	let raiz = Math.sqrt(numero)

	if (Number.isInteger(raiz)) {
		resp1.innerText = `A raiz quadrada é ${raiz}`
	} else {
		resp1.innerText = `esse numero não tem raiz exata`
	}

})
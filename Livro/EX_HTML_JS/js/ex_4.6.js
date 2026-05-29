
const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')
const resp3 = document.querySelector('h4')

frm.addEventListener("submit", (e) => {
	e.preventDefault()

	const saque = Number(frm.inSaque.value)

	if (saque % 10 != 0) {
		if (typeof swal === 'function') {
			swal('Valor Invalido notas disponiveis (R$: 10 , 50, 100)')
			frm.inSaque.focus()
		} else {
			alert('Valor Invalido notas disponiveis (R$: 10 , 50, 100)')
			frm.inSaque.focus()
		}
	}

	const notasCem = Math.floor(saque / 100)
	let resto = saque % 100
	const notasCinquenta = Math.floor(resto / 50)
	resto % 50
	const notasDez = Math.floor(resto / 10)

	if (notasCem > 0) {
		resp1.innerText = `Notas de R$ 100: ${notasCem}`
	}

	if (notasCinquenta > 0) {
		resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
	}

	if (notasDez > 0) {
		resp3.innerText = `Notas de R$ 10: ${notasDez}`
	}
})
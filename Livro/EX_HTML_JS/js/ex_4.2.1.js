const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const nome = frm.inNome.value
	const masculino = frm.inMasculino.checked
	const feminino = frm.inFeminino.checked
	const altura = Number(frm.inAltura.value)

	let peso = 0

	if (masculino) {
		peso = 22 * Math.pow(altura, 2).toFixed(2)
	} else {
		peso = 21 * Math.pow(altura, 2).toFixed(2)
	}

	resp1.innerText = `${nome}: o seu peso é ${peso}kg`

})

frm.addEventListener('reset', (e) => {
	resp1.innerText = ""
})
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const hora = Number(frm.inHoraBrasil.value)

	let horaFranca = hora + 5

	if (horaFranca > 24) {
		horaFranca += -24
	}

	resp1.innerText = `A hora na frança é ${horaFranca}`


})
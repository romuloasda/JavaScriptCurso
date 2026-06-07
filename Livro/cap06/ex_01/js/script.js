const form = document.querySelector('#formulario1')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')

const pacientes = []

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const nome = form.inPaciente.value

	pacientes.push(nome)

	let lista = "" //pacientes.map((e, i) => `${i + 1}. ${e}`)

	for (let i = 0; i < pacientes.length; i++) {
		lista += `${i + 1}. ${pacientes[i]} \n`
	}

	resp1.innerText = lista

	form.inPaciente.value = ""
	form.inPaciente.focus()

})

form.btUrgencia.addEventListener('click', () => {

	if (!form.checkValidity()) {
		alert('Informe o nome do paciente a ser atendido em carater de urgencia')
		form.inPaciente.focus()
		return
	}

	const nome = form.inPaciente.value
	pacientes.unshift(nome)

	let lista = ""

	pacientes.forEach((e, i) => (lista += `${i + 1}. ${e} \n`))
	resp1.innerText = lista

	form.inPaciente.value = ""
	form.inPaciente.focus()

})

form.btAtender.addEventListener('click', () => {
	if (pacientes.length == 0) {
		alert('Não há paciente na fila de espera')
		form.inPaciente.focus()
		return
	}

	const atender = pacientes.shift()
	resp1.innerText = atender
	let lista = ""

	pacientes.forEach((e, i) => (lista += `${i + 1}. ${e}\n`))
	resp2.innerText = lista
})
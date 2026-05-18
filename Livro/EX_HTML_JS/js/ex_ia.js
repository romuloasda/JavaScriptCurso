const frm = document.querySelector("form")
const name = document.querySelector('inNome')
const n1 = document.querySelector('n1')
const n2 = document.querySelector('n2')
const n3 = document.querySelector('n3')
const resp = document.querySelector('h3')
const resp2 = document.querySelector('h4')

const historicoMedias = []

frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const nome = frm.inNome.value
	const nota1 = Number(frm.n1.value)
	const nota2 = Number(frm.n2.value)
	const nota3 = Number(frm.n3.value)

	let media;
	if (nota3 === 0) {
		media = (nota1 + nota2) / 2
	} else {
		media = (nota1 + nota2 + nota3) / 3
	}

	historicoMedias.push(nome, media)

	resp.textContent = `A sua media ${nome} é ${media}`
	resp2.textContent = `${historicoMedias.join(',')}`

	frm.reset()
})
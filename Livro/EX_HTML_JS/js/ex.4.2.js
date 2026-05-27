const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')
// const nome = document.querySelector('inNome')
// const nota1 = document.querySelector('inNota1')
// const nota2 = document.querySelector('inNota2')
// const nota3 = document.querySelector('inNota3')

frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const nome = frm.inNome.value
	const nota1 = Number(frm.inNota1.value)
	const nota2 = Number(frm.inNota2.value)
	const nota3 = Number(frm.inNota3.value)
	let media;
	if (nota1 + nota2) {
		media = (nota1 + nota2) / 2
	} else if (nota1 + nota2 + nota3) {
		media = (nota1 + nota2 + nota3)
	}

	if (media >= 7) {
		resp1.innerText = `${nome} sua media foi ${media}`
		resp1.style.color = 'blue';
	} else if (media >= 4) {
		resp1.innerText = `Atenção ${nome}. Sua media ${media} não suficiente`
		resp1.style.color = 'green'
	} else {
		resp1.innerText = `Ops ${nome} você não foi aprovado!!!! Media ${media}`
		resp1.style.color = 'red'
	}

})
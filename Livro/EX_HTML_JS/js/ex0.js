const frm = document.querySelector('#fmedia')
const media1 = document.querySelector('#outResp1')
const media2 = document.querySelector('#outResp2')
const media3 = document.querySelector('#outResp3')
const res = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
	const m1 = Number(frm.inN1.value)
	const m2 = Number(frm.inN2.value)
	const m3 = Number(frm.inN3.value)

	const resultado = (m1 + m2 + m3) / 3

	media1.textContent = `Nota 01: ${m1}`
	media2.textContent = `Nota 02: ${m2}`
	media3.textContent = `Nota 03: ${m3}`

	if (resultado >= 8) {
		res.textContent = `Sua nota foi ${resultado}, você foi aprovado com MAESTRIA !!!`
	} else if (resultado >= 6) {
		res.textContent = `Sua nota foi ${resultado}, você foi aprovado. 
		PODERIA TER SIDO MELHO`
	} else if (resultado <= 5) {
		res.textContent = ` SUA NOTA ${resultado}
		ATENÇÃO VOCÊ FOI REPROVADO !!!!!!`
	}

	e.preventDefault()
})

const frm2 = document.querySelector('#fnum')
const aleatorio = document.querySelector('h5')

frm2.addEventListener('submit', (e) => {
	const randon = Number(Math.random(frm2.inNum.value) * 10000).toFixed()

	aleatorio.textContent = `GERANDO ......... ${randon}`

	e.preventDefault()
})
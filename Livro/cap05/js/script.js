const frm = document.querySelector('#formulario1')
const frm2 = document.querySelector('#formulario2')
const resp = document.querySelector('#tabuada')
const resp2 = document.querySelector('#decrescente')


frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const num = Number(frm.inNumero.value)

	function tabuada(numero) {
		let resultado = 0
		let conteudo = ""
		for (let i = 1; i < 11; i++) {
			resultado = numero * i
			conteudo += `  ${numero} X ${i} = ${resultado} \n`
		}

		resp.innerText = conteudo

	}



	tabuada(num)

})

frm2.addEventListener('submit', (e) => {
	e.preventDefault()

	let num2 = Number(frm2.inNumero2.value)
	let conteudo2 = ""

	for (let i = 0; i < num2; num2--) {
		conteudo2 += `${num2} `
	}

	resp2.innerText = conteudo2
})





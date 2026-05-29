const frm1 = document.querySelector('#formulario1')
const frm2 = document.querySelector('#formulario2')
const frm3 = document.querySelector('#formulario3')
const resp1 = document.querySelector('#resposta1')
const resp2 = document.querySelector('#resposta2')
const resp3 = document.querySelector('#resposta3')
const btnReset = document.querySelector('#btnResetNativo')
const btnResetVelo = document.querySelector('#btnResetVelo')
const btnResetPaq = document.querySelector('#btnResetPaq')

frm1.addEventListener('submit', (e) => {
	e.preventDefault()
	const numero = Number(frm1.inNumero.value)


	const p = numero % 2 === 0 ? 'PAR' : 'IMPAR'

	resp1.innerText = `${p}`
	resp1.style.color = 'red'


})

btnReset.addEventListener('click', () => {

	frm1.reset()
	resp1.innerText = ""
})

// // 4. Recarregando a página atual
// // ==========================================
// const btnRecarregar = document.getElementById("btnRecarregar");

// btnRecarregar.addEventListener("click", () => {
//   window.location.reload();
// });

frm2.addEventListener('submit', (e) => {
	e.preventDefault()

	const velPermitida = Number(frm2.inVp.value)
	const velCondutor = Number(frm2.inVc.value)
	let vinte = velPermitida * 1.2



	if (velCondutor <= velPermitida) {
		resp2.innerText = 'Sem MULTA'
		resp2.style.background = 'gray'
	} else if (velCondutor <= vinte) {
		resp2.innerText = 'Multa LEVE'
		resp2.style.background = 'green'
	} else {
		resp2.innerHTML = 'Multa GRAVER'
		resp2.style.background = 'red'
	}
})

btnResetVelo.addEventListener('click', () => {
	frm2.reset()
	resp2.innerText = ""
})

frm3.addEventListener('submit', (e) => {
	e.preventDefault()

	const valor = Number(frm3.inParquimetro.value)

	let troco;

	if (valor >= 3) {
		troco = valor - 3
		resp3.innerText = `Tempo minimo 120 minutos seu troco ${troco}`
	} else if (valor >= 1.75) {
		troco = valor - 1.75
		resp3.innerText = `Tempo minimo 60 minutos, seu troco ${troco}`
	} else if (valor >= 1) {
		troco = valor - 1
		resp3.innerText = `Tempo minimo 30 minutos, seu troco ${troco}`
	} else if (valor < 1) {
		resp3.innerText = `Valor insuficiente`
	}
})

btnResetPaq.addEventListener('click', () => {
	frm3.reset()
	resp3.innerText = ""
})



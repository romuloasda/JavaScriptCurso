const frm = document.querySelector('form')
const frm2 = document.querySelector('#form2')
const frm3 = document.querySelector('#form3')
const frm4 = document.querySelector('#form4')
const frm5 = document.querySelector('#form5')
const resp1 = document.querySelector('#resposta')
const resp2 = document.querySelector('#resposta2')
const resp3 = document.querySelector('#resposta3')
const resp4 = document.querySelector('#resposta4')
const resp5 = document.querySelector('#resposta5')
const resp6 = document.querySelector('#resposta6')

let resposta = ""
let numContas = 0
let valTotal = 0


frm.addEventListener('submit', (e) => {
	e.preventDefault()
	const descricao = frm.inDescricao.value
	const valor = Number(frm.inValor.value)

	numContas++

	valTotal += valor
	resposta = resposta + descricao + " - R$:" + valor.toFixed(2) + "\n"
	resp1.innerText = `${resposta} ----------------------------------------`
	resp2.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`


	frm.inDescricao.value = ""
	frm.inValor.value = ""
	frm.inDescricao.focus()
})

frm2.addEventListener('submit', (e) => {
	e.preventDefault()

	const numero = Number(frm2.inNumero.value)
	let numDivisor = 0

	for (let i = 0; i <= numero; i++) {
		if (numero % i == 0) {
			numDivisor++
		}
	}

	if (numDivisor == 2) {
		resp3.innerText = `${numero} é primo`
	} else {
		resp3.innerText = `${numero} não é primo`
	}
})

frm3.addEventListener('submit', (e) => {
	e.preventDefault()

	const simbolo = Number(frm3.inSimbolo.value)

	let estrela = ""

	for (let i = 1; i <= simbolo; i++) {
		if (i % 2 == 1) {
			estrela = estrela + "*"
		} else {
			estrela = estrela + "-"
		}
	}

	resp4.innerText = estrela
})

frm4.addEventListener('submit', (e) => {
	e.preventDefault()

	const fruta = frm4.inFruta.value
	const numero = Number(frm4.inNum.value)

	let resFruta = ""

	for (let i = 1; i <= numero; i++) {
		resFruta = resFruta + fruta + " * "
	}


	resp5.innerText = resFruta
})

frm5.addEventListener('submit', (e) => {
	e.preventDefault()

	let chinelo = Number(frm5.inFruta.value)
	const anos = Number(frm5.inAnos.value)

	let totalAnos = ""


	for (let i = 1; i <= anos; i++) {
		totalAnos += `${i}° Ano: ${chinelo} Chinelas \n`
		chinelo = chinelo * 3
	}

	console.log(totalAnos)
	resp6.innerText = totalAnos
})
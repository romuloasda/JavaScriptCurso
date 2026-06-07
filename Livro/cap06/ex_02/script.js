const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHACES = 6

frm.addEventListener('submit', (e) => {
	e.preventDefault()

	const numero = Number(frm.inNumero.value)

	if (numero == sorteado) {
		respDica.innerText = `Parabéns número sorteado ${sorteado}`
		frm.btnSubmit.disabled = true
		frm.btnNovo.className = 'exibe'
	} else {
		if (erros.includes(numero)) {
			alert(`Você já apostou esse numero. ${numero}. Tente outro...`)
		} else {
			erros.push(numero)
			const numErros = erros.length
			const numChances = CHACES - numErros
			respErros.innerText = `${numErros} (${erros.join(', ')})`
			respChances.innerText = numChances

			if (numChances == 0) {
				alert('Suas chances acabaram')
				frm.btnSubmit.disabled = true
				frm.btnNovo.className = 'exibe'
				respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
			} else {
				const dica = numero < sorteado ? 'maior' : 'menor'
				respDica.innerText = `Dica: Tente um numero ${dica} que ${numero}`
			}
		}
	}

	frm.inNumero.value = ''
	frm.inNumero.focus()
})

frm.btnNovo.addEventListener('click', () => {
	location.reload()
})
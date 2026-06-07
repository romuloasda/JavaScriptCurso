const numSortado = Math.floor(Math.random() * 100) + 1
const listaDeTentativa = []

const decobir = function (numero) {

	if (numero == numSortado) {
		console.log(`Parabens!! o numero Sortado foi ${numSortado}`)
	} else {
		if (listaDeTentativa.includes(numero)) {
			console.log('Voce ja tentou esse numero, tente outro')
		} else if (numero === undefined) {
			console.log('Digite Algum Numero:')
		} else {
			console.log(`Seu numero foi ${numero}, tente de novo. O numero sortrado foi ${numSortado}.`)
			listaDeTentativa.push(numero)
			console.log(listaDeTentativa)
		}
	}
}



decobir(50)
decobir(25)
decobir(13)

const pacientes = []

const atendimento = function (paciente, urgencia, atender) {
	if (paciente) {
		pacientes.push(paciente)
	}

	if (urgencia) {
		pacientes.unshift(urgencia)
	}

	if (atender) {
		pacientes.shift(atender)
	}
}

atendimento('paciente')
atendimento('paciente1')
atendimento('paciente2', 'paciente3')
atendimento('paciente4', 'paciente5', '')
console.log(pacientes)

const atendimento2 = {
	pacientess: [],
	paciente: () => {
		pacientess.push()
	},


}

atendimento2.paciente('romulo')
console.log(atendimento2)




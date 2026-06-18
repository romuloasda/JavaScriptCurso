let velocidade = 85

if (velocidade > 85) {
	console.log("Multado! Você excedeu o limite.")
} else {
	console.log("Boa viagem! Dirija com segurança.")
}

let opcao = 5

switch (opcao) {
	case 1:
		console.log("Exibir Saldo Disponível")
		break
	case 2:
		console.log("Imprimir Extrato da Conta")
		break
	case 3:
		console.log("Falar com Atendente")
		break
	default:
		console.log('Opção invalida')
}

let cont = 10

while (cont > 0) {
	console.log(cont)
	cont--
}

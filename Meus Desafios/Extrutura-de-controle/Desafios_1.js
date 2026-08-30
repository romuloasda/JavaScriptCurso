// const temperatura = 28

// if (temperatura >= 30) {
// 	console.log("Muito quente! Beba bastante água.")
// } else if (temperatura >= 18 && temperatura <= 29) {
// 	console.log("Clima agradável.")
// } else if (temperatura < 18) {
// 	console.log("Tempo frio! Leve um casaco.")
// }

// let mult = 1
// while (mult <= 10) {
// 	console.log(` 7 x ${mult} = ${7 * mult}`)
// 	mult++
// }

// let saldo = 0

// while (saldo < 100) {
// 	saldo += 25
// 	if (saldo == 100) {
// 		console.log(`Meta atingida! Saldo final: R$ ${saldo}`)
// 	} else {
// 		console.log(`Saldo atual: R$ ${saldo}`)
// 	}
// }

// for (let i = 1; i <= 20; i++) {
// 	if (i % 2 == 0) {
// 		console.log(`Numero PAR encontrado ${i}`)
// 	} else {
// 		console.log(`Numero IMPAR ${i}`)
// 	}
// }

// const caixas = [12, 25, 8, 30, 15, 5];

// let index = 1

// for (let i of caixas) {
// 	if (i >= 20) {
// 		console.log(`Caixa ${index}: ${i}kg - PESADA (Precisa de guindaste)`)
// 	} else if (i >= 10 && i <= 19) {
// 		console.log(`Caixa ${index}: ${i} kg - PADRÃO (Envio normal)`)
// 	} else if (i < 10) {
// 		console.log(`Caixa ${index}: ${i}kg - LEVE (Envio expresso)`)
// 	}
// 	index++
// }

// let diaSemana = 3

// switch (diaSemana) {
// 	case 1:
// 		console.log('Domingo')
// 		break
// 	case 2:
// 		console.log('Segunda')
// 		break
// 	case 3:
// 		console.log('Terça')
// 		break
// 	default:
// 		console.log('Dia invalido')
// 		break
// }

// let num1 = 10
// let num2 = 5
// let operador = "*"

// switch (operador) {
// 	case "+": console.log(num1 + num2)
// 		break
// 	case "-": console.log(num1 - num2)
// 		break
// 	case "*": console.log(num1 * num2)
// 		break
// 	case "/": console.log(num1 / num2)
// 		break
// 	default:
// 		console.log('Operador Invalido')
// 		break
// }

// let cargo = "desenvolvedor";

// switch (cargo) {
// 	case 'desenvolvedor':
// 	case 'designer':
// 	case 'qa':
// 		console.log('Setor: Tecnologia');
// 		break;
// 	case 'contador':
// 	case 'financeiro':
// 		console.log('Setor: Finanças');
// 		break;
// 	case 'rh':
// 		console.log('Setor: Recursos Humanos');
// 		break;
// 	default:
// 		console.log('Setor não identificado');
// 		break;
// }

// let imc = 27.5

// switch (true) {
// 	case imc < 18.5:
// 		console.log("Abaixo do peso")
// 		break
// 	case imc >= 18.5 && imc <= 24.9:
// 		console.log("Peso normal")
// 		break
// 	case imc >= 25 && imc <= 29.9:
// 		console.log("Sobrepeso")
// 		break
// 	case imc >= 30:
// 		console.log("Obesidade")
// 		break
// 	default:
// 		console.log("Valor inválido")
// 		break
// }

// let valorCompra = 150
// let desconto = 0

// switch (true) {
// 	case valorCompra == 500:
// 		desconto = valorCompra - (valorCompra * 20 / 100)
// 		console.log(desconto)
// 		break
// 	case valorCompra >= 200 && valorCompra <= 499:
// 		desconto = valorCompra - (valorCompra * 10 / 100)
// 		console.log(desconto)
// 		break
// 	case valorCompra >= 100 && valorCompra <= 199:
// 		desconto = valorCompra - (valorCompra * 5 / 100)
// 		console.log(desconto)
// 		break
// 	case valorCompra < 100:
// 		console.log('Valor a baixo de 100, SEM DESCONTO ! ! !')
// 		break
// 	default:
// 		console.log('Valor Invalido!!!')
// 		break

// }

// const produtos = ["notebook", "camisa", "manga", "celular", "calça", "maçã", "monitor"];

// for (let i of produtos) {
// 	switch (i) {
// 		case 'notebook':
// 		case 'celular':
// 		case 'monitor':
// 			console.log(`${i} -> Categoria: Eletrônicos`)
// 			break
// 		case 'camisa': case 'calça':
// 			console.log(`${i} -> Categoria: Vestuário`)
// 			break
// 		case 'manga': case 'maçã':
// 			console.log(`${i} -> Categoria: Frutas `)
// 			break
// 		default:
// 			console.log(`${i} -> Categoria: Outros`)
// 	}
// }

// const notas = [9.5, 4.0, 7.2, 8.0, 5.8, 2.0];

// for (let i in notas) {
// 	let indice = Number(i)
// 	switch (true) {
// 		case notas[i] >= 9:
// 			console.log(`Aluno ${indice + 1} (Nota ${notas[i]}): Excelente - Aprovado com Honra`)
// 			break
// 		case notas[i] >= 7 && notas[i] <= 8.9:
// 			console.log(`Aluno ${indice + 1} (Nota ${notas[i]}): Aprovado`)
// 			break
// 		case notas[i] >= 5 && notas[i] <= 6.9:
// 			console.log(`Aluno ${indice + 1} (Nota ${notas[i]}): Em Recuperação`)
// 			break
// 		case notas[i] < 5:
// 			console.log(`Aluno ${indice + 1} (Nota ${notas[i]}): Reprovado`)
// 			break
// 		default:
// 			console.log('Nota Invalida')
// 			break
// 	}
// }

// const transacoes = [150, -40, 300, -500, 80, -20];

// let contador = 0

// while (contador < transacoes.length) {
// 	switch (true) {
// 		case transacoes[contador] > 0:
// 			console.log(`Transação ${contador + 1}: Depósito de R$ ${transacoes[contador]}`)
// 			break
// 		case transacoes[contador] < 0:
// 			console.log(`Transação ${contador + 1}: Saque/Débito de R$ ${transacoes[contador]}`)
// 			break
// 		default:
// 			console.log(`Transação ${contador + 1}: Operação Nula`)
// 			break
// 	}
// 	contador++
// }

let idade = 17

const statusAcesso = idade >= 17 ? "Permetido" : "Acesso negado"
console.log(statusAcesso)

const precos = [45, 120, 80, 250, 30];

for (let i of precos) {
	let tipoProd = i > 100 ? "Produto Premium" : "Produto Convencional"
	console.log(`R$ ${i} -> ${tipoProd}`)
}

const vendas = [150, 80, 300, 50, 450];

const vendasLiquidas = vendas.map(a => a >= 100 ? a * 0.9 : a)
console.log(vendasLiquidas)

const pontuacoes = [95, 40, 75, 60, 88];

const statusPontuacao = pontuacoes.map(a =>
	a >= 90 ? "Nível Ouro" :
		a >= 70 ? "Nível Prata" :
			"Nível Bronze"
);

console.log(statusPontuacao)
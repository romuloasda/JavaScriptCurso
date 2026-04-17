const nota = 7

if (nota >= 9 && nota <= 10) {
	console.log('Parabéns, a sua nota é A \n QUADRO DE HORRAN')
} else if (nota >= 7 && nota <= 8.9) {
	console.log('A sua nota é B !! \n Faltou pouco para o quadro de horra!')
} else if (nota >= 5) {
	console.log('A sua nota é C')
} else if (nota >= 4.5) {
	console.log('A sua nota foi D e por isso voce não foi aprovado')
} else if (nota < 4.5) {
	console.log('A sua nota foi menor que 4.5 "F"\n e por isso voce foi reprovado')
}


try:
	salario_mensal = int(input("Digite seu salario mensal: "))

	valor_emprestimo = int(input("Digite o numero do emprestimo desejato: "))

	score_credito = int(input("Qual o seu score: "))

	if score_credito < 300:
		print("Score muito baixo")
	elif score_credito >= 700 and valor_emprestimo <= salario_mensal * 10:
		print("Emprestimo APROVADO com a categoria Cliente Ouro")
	elif score_credito >= 500 and score_credito <= 699 and valor_emprestimo <= salario_mensal * 5:
		print("Emprestimo APROVADO CLIENTE PRATA")
	elif score_credito >= 500 and valor_emprestimo > salario_mensal * 10 or valor_emprestimo * 5:
		print("O credito foi NEGADO")
	elif score_credito >= 300 and score_credito <= 499:
		print('Score insuficiente para operação')
except ValueError:
	print("Entrada invalida")







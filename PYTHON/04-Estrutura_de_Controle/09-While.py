menu = ["Menu:", "1. OP A", "2. OP B", "3. Sair"]

opcao_selecionada = 0

while opcao_selecionada != 3:
	print("\n".join(menu))
	opcao_selecionada = int(input())

	if opcao_selecionada == 1:
		nome = input("Informe o seu nome: ")
		print(nome)

	elif opcao_selecionada == 2:
		email = input("Informe o Email: ")
		print(email)

	elif opcao_selecionada == 3:
		print("Tchauuuuuuuuuuuuuuuuuuuuuuuuuuuu")

print("FIM")
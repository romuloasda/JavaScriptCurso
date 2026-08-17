# SENHA_CORRETA = '1234'
# tentativas = 1

# while tentativas <= 3:
# 	tentativas += 1
# 	if ( senha := input("Digite sua senha: ")) == SENHA_CORRETA:
# 		print("✅ Acesso autorizado!")
# 		break
# else:
# 	print("❌ Cartão bloqueado por excesso de tentativas!")

while True:
	try:
		if (preco := float(input("Digite um valor decimal: ").strip())) > 0:
			print("Preço aceito")
			break
		print("O valor deve ser decimal e maior que zero.")
	except ValueError:
		print('ERRO')


itens = ["A", "B", "C"]

while itens:
	item_atual = itens.pop(0)
	print(item_atual)
print('Todos os itens já foram impressos')

while True:
	if (palavra := input('Digite OK para encerrar: ').strip().upper()) == 'OK':
		print(f"{palavra}! Encerrando com sucesso...")
		break
	else:
		print('Tente novamente')



contas_banidas = [102, 205, 308]

try:

	nome_titular = input("Digite o nome do titular da conta: ").strip()

	if not nome_titular:
		print("⚠️ Erro: Nome do titular não pode ser vazio!")
	else:
		idade_titular = int(input("Digite a sua idade: ").strip())

	if not (18 <= idade_titular <= 100):
		print("⚠️ Idade fora do limite permitido")
	else:	
		conta_cliente = int(input("Digite o numero da conta: ").strip())

		for conta_banida in contas_banidas:
			if conta_cliente == conta_banida:
				print("❌ Transação Negada: Conta banida por fraude!")
				break
		else:
			print(f"✅ Conta auditada e aprovada! Processando transação para {nome_titular}, número da conta {conta_cliente}")
			
except SyntaxError as e:
	print(e)



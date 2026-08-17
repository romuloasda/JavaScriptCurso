try:

	texto = "llllll"

	if (tamanho := len(texto) == 6 ):
		print(tamanho)
	else:
		print("❌ Código inválido: O código deve ter exatamente 6 caracteres.")

	valor_transferencia = float()

	lista = [valor_transferencia > 0, valor_transferencia <= 50000.00, True, False  ]

	alerta_origem_internacional = True if valor_transferencia > 20000.00 else False

	if all(lista):
		print("🟡 Transação em Análise: Critérios válidos, mas requer aprovação da mesa de compliance.")



except SyntaxError as e:
	print(e)


palavra = "Python"

if (tamanho := len(palavra)):
	print(f"{tamanho}")

status = None
if status is None:
	print("Sem status")

checagens = [True, True, True]
avisos = [False, True, False]

if all(checagens):
	print("Tudo certo")

if any(avisos):
	print("Tem algum aviso")


token = "ABC1234"

regras = [True, True, False]

if (tamanho := len(token)) >= 5:
	if any(regras):
		print("Acesso liberado com pendências")
	else:
		print(f"Acesso 100% liberado")

codigo = "XYZ"

if (n := len(codigo)) < 5:
	print(f"Código muito curto: apenas {n} letras")


tem_acesso = False
tem_chave = False
sistema_aberto = True

if (tem_acesso or tem_chave) and sistema_aberto:
	print("Tem acesso, pode entrar")
else:
	print('Acesso BLOQUEADO')

temperatura = 23

match temperatura:
	case t if t > 30:
		print("Muito quente!")
	case _:
		print("Muito agradavel")



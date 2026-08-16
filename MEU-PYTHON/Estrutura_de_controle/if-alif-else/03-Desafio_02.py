try:
	tipo_cliente = input("Digite o tipo do cliente VIP, COMUM, ou NOVO: ").strip().lower()
	categoria_problema = input("Digite a categoria do problema \nCancelamento\nTroca\nDuvida\n").strip()
	valor_compra = float(input("Digite o valor da Compra: "))

except ValueError as e:
	print(f"ERRO {e}")

# Atendimento Prioritario
if tipo_cliente == "vip" or valor_compra > 1000:
	if categoria_problema in ("cancelamento", "troca"):
		print("✅ Transfira imediatamente para o Gerente de Retenção!")
	else:
		print("✅ Transfira para a Fila Prioritária de Suporte.")
elif tipo_cliente == "comum" or tipo_cliente == "novo":
	print("🟡 Encaminhe para a Fila Especial de Retenção.")
else:
	print("🟢 Encaminhe para a Fila de Atendimento Geral")

if tipo_cliente not in ("vip", "comum", "novo"):
	print("⚠️ Tipo de cliente não reconhecido. Redirecionando para a triagem manual.")
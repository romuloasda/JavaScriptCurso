lista_produtos = ["Notebook", "Headset", "Teclado Mecânico", "Monitor 144Hz"]

quantidades_vendidas = [12, 45, 30, 8]

precos_unitarios = [3500.00, 150.00, 250.00, 1200.00]

faturamento_total = 0.0

sub_total = 0.0

status_meta = ""

# O enumerate numera a iteração, e o zip agrupa as suas listas
for indice, (produto, vendas, preco) in enumerate(zip(lista_produtos, quantidades_vendidas, precos_unitarios), start=1):

	sub_total = preco * vendas

	if vendas >= 20:
		status_meta = "✅ Meta Batida"
	else:
		status_meta = "⚠️ Abaixo da Meta"

	print(f"Produto {indice}: {produto} | Preço: R$ {preco} | Quantidade de vendas: {vendas} | Total: {sub_total:.2f} | Status: {status_meta}")

	faturamento_total += sub_total

print(f"\nFaturamento Geral do Trimestre formatado em R${faturamento_total:.2f}")
	
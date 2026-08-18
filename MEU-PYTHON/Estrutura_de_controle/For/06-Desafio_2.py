produtos = ["Teclado", "Mouse", "Monitor"]

for indice, produto in enumerate(produtos, start=1):
	print(f"{indice} - {produto}")
print('-------------------------------------------')
meses = ["Jan", "Fev", "Mar"]

vendas = [100, 150, 200]

for mes, venda in zip(meses, vendas):
	print(f"{mes} - {venda}")

pontos = [10, 20, 30]
total_pontos = 0

for ponto in pontos:
	total_pontos += ponto

print(total_pontos)
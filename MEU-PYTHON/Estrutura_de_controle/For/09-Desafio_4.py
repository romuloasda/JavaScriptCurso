precos = [10, 20, 30]

preco_com_taxa = [p + 5 for p in precos]

print(preco_com_taxa)

idades = [12, 18, 25, 15, 30]

maiores = [i for i in idades if i >= 18]
print(maiores)

grade = [["A", "B"], ["C", "D"]]

for g in grade:
	for r in g:
		print(r, end=" ")
	print()

precos_estoque = [45.0, 120.0, 15.0, 350.0, 80.0, 5.0]

TAXA_FIXA = 10.0

produtos_premium = [l + TAXA_FIXA for l in precos_estoque if l > 50]
print(produtos_premium)

rotulos_produtos = ["Alto Custo" if p >= 100 else "Acessivel" for p in precos_estoque]

print(rotulos_produtos)

mapa_deposito = [
    ["Setor A1", "Setor A2"],
    ["Setor B1", "Setor B2"]
]

for mapa in reversed(sorted(mapa_deposito)):
	for valor in mapa:
		print(valor, end=" ")
	print()

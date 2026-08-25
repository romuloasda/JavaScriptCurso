nomes = ["Ana", "Bruno", "Carlos"]

tamanho_nomes = {nome: len(nome) for nome in nomes}
print(tamanho_nomes)

codigos = ["A1", "B2", "A1", "C3", "B2"]

codigos_unicos = {n for n in codigos}
print(codigos_unicos)

from itertools import product

# 1. Dados Iniciais
modelos = ["Camisa", "Moletom"]
cores = ["Preto", "Branco", "Cinza"]
tags_brutas = ["promo", "novo", "promo", "inverno", "novo"]

# 2. Set Comprehension (Elimina duplicatas e coloca em maiúsculas)
tags_unicas = {t.upper() for t in tags_brutas}
print(f"Tags Únicas: {tags_unicas}")

# 3. Geração do Catálogo com itertools.product
catalogo = []
for modelo, cor in product(modelos, cores):
    item = f"{modelo} {cor}"
    catalogo.append(item)

# 4. Dict Comprehension com Condicional Inline
tabela_precos = {produto: 120.00 if "Moletom" in produto else 60.00 for produto in catalogo}

# Exibição Formatada
print("\n=== TABELA DE PREÇOS ===")
for produto, preco in tabela_precos.items():
    print(f"{produto:<15} | R$ {preco:.2f}")
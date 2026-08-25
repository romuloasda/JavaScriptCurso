# A List Comprehension é uma das ferramentas mais famosas do Python. Ela permite criar e transformar listas em uma única linha legível, substituindo blocos de 4 a 5 linhas de um laço for tradicional.

# Sintaxe Base: [expressao for item in iteravel]

# Com Filtro (if): [expressao for item in iteravel if condicao]

# Com Transformação Condicional (if / else): [valor_se_true if condicao else valor_se_false for item in iteravel]

numeros = [1, 2, 3, 4, 5]

# 1. Transformação simples (dobrar os valores)
dobros = [n * 2 for n in numeros]

# 2. Filtragem simples (apenas números pares)
pares = [n for n in numeros if n % 2 == 0]

# 3. Transformação condicional
classificacao = ["Par" if n % 2 == 0 else "Ímpar" for n in numeros]

#Comprehensions de Outras Estruturas (Dict e Set Comprehension)

# Criando um dicionário de quadrados dinamicamente:
quadrados = {x: x**2 for x in range(1, 4)}
print(quadrados)  # Saída: {1: 1, 2: 4, 3: 9}

# Criando um conjunto que remove duplicados automaticamente:
numeros = [1, 2, 2, 3, 3, 4]
unicos = {n for n in numeros}
print(unicos)     # Saída: {1, 2, 3, 4}

from itertools import zip_longest, product

# 1. zip_longest: listas de tamanhos diferentes
nomes = ["Ana", "Bruno", "Caio"]
idades = [20, 25]
for nome, idade in zip_longest(nomes, idades, fillvalue="Sem idade"):
    print(f"{nome}: {idade}")

# 2. product: produto cartesiano sem laços aninhados
tamanhos = ["P", "M"]
cores = ["Azul", "Preto"]
for tam, cor in product(tamanhos, cores):
    print(f"{tam} - {cor}")


# Lista na memória (aloca todos os números de uma vez):
lista_memoria = [x * 2 for x in range(5)]

# Expressão Geradora (aloca apenas o item da vez, economizando RAM):
gerador = (x * 2 for x in range(5))

for valor in gerador:
    print(valor)


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
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
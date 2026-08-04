# ==========================================
# OPERADORES DE COMPARAÇÃO (RELACIONAIS)
# ==========================================

# Os operadores de comparação analisam a relação entre dois valores.
# O resultado de qualquer comparação é sempre um Booleano: True (Verdadeiro) ou False (Falso).

a = 10
b = 5
c = 10

print(f"Valores base para os testes -> a = {a}, b = {b}, c = {c}\n")

# 1. Igualdade (==)
# Verifica se o valor da esquerda é igual ao valor da direita.
print(f"Igualdade (a == c): {a == c}")  # Retorna True
print(f"Igualdade (a == b): {a == b}")  # Retorna False

# 2. Diferença (!=)
# Verifica se o valor da esquerda é diferente do valor da direita.
print(f"Diferença (a != b): {a != b}")  # Retorna True
print(f"Diferença (a != c): {a != c}")  # Retorna False

# 3. Maior que (>)
# Verifica se o valor da esquerda é estritamente maior que o da direita.
print(f"Maior que (a > b): {a > b}")    # Retorna True
print(f"Maior que (b > a): {b > a}")    # Retorna False

# 4. Menor que (<)
# Verifica se o valor da esquerda é estritamente menor que o da direita.
print(f"Menor que (b < a): {b < a}")    # Retorna True
print(f"Menor que (a < b): {a < b}")    # Retorna False

# 5. Maior ou igual a (>=)
# Verifica se o valor da esquerda é maior OU igual ao da direita.
print(f"Maior ou igual (a >= c): {a >= c}")  # Retorna True (são iguais)
print(f"Maior ou igual (a >= b): {a >= b}")  # Retorna True (a é maior)
print(f"Maior ou igual (b >= a): {b >= a}")  # Retorna False

# 6. Menor ou igual a (<=)
# Verifica se o valor da esquerda é menor OU igual ao da direita.
print(f"Menor ou igual (b <= a): {b <= a}")  # Retorna True (b é menor)
print(f"Menor ou igual (a <= c): {a <= c}")  # Retorna True (são iguais)
print(f"Menor ou igual (a <= b): {a <= b}")  # Retorna False
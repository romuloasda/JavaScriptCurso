# ==========================================
# OPERADORES DE ATRIBUIÇÃO EM PYTHON
# ==========================================

# 1. Atribuição Simples (=)
# Define o valor inicial de uma variável.
x = 10
print(f"Atribuição simples (x = 10): {x}")

# 2. Atribuição com Adição (+=)
# Soma um valor ao valor atual da variável e atualiza o resultado.
# Equivalente a: x = x + 5
x += 5
print(f"Adição composta (x += 5): {x}")

# 3. Atribuição com Subtração (-=)
# Subtrai um valor do valor atual da variável e atualiza o resultado.
# Equivalente a: x = x - 3
x -= 3
print(f"Subtração composta (x -= 3): {x}")

# 4. Atribuição com Multiplicação (*=)
# Multiplica o valor atual da variável e atualiza o resultado.
# Equivalente a: x = x * 2
x *= 2
print(f"Multiplicação composta (x *= 2): {x}")

# 5. Atribuição com Divisão (/=)
# Divide o valor atual da variável e atualiza o resultado. Sempre resulta em float.
# Equivalente a: x = x / 4
x /= 4
print(f"Divisão composta (x /= 4): {x}")

# 6. Atribuição com Divisão Inteira (//=)
# Realiza a divisão inteira do valor atual e atualiza a variável.
# Equivalente a: x = x // 2
x //= 2
print(f"Divisão inteira composta (x //= 2): {x}")

# 7. Atribuição com Módulo (%=)
# Calcula o resto da divisão do valor atual e atualiza a variável.
# Equivalente a: x = x % 2
x %= 2
print(f"Módulo composto (x %= 2): {x}")

# 8. Atribuição com Exponenciação (**=)
# Eleva o valor atual à potência informada e atualiza a variável.
# Equivalente a: x = 3; x = x ** 3
x = 3
x **= 3
print(f"Exponenciação composta (x **= 3): {x}")
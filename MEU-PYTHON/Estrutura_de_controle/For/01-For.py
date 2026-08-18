linguagens = ["Python", "JavaScript", "C++"]

for lang in linguagens:
    print(f"Estudando: {lang}")

# Conta de 1 até 3 (o 4 não entra)
for i in range(1, 4):
    print(f"Passo: {i}")

# Pula de 2 em -2: gera 0, 2, 4
for par in range(0, 5, 2):
    print(f"Par: {par}")


for num in range(1, 6):
    if num == 2:
        continue  # Pula o 2
    if num == 4:
        break     # Para a execução antes do 4
    print(num)    # Imprime apenas 1 e 3

precos = [10.0, 25.5, 4.5]
total = 0.0

for preco in precos:
    total += preco

print(f"Total gasto: R$ {total:.2f}")

matriz = [
    [1, 2],
    [3, 4]
]

for linha in matriz:
    for valor in linha:
        print(valor, end=" ")
    # print()  # Quebra de linha ao fim de cada linha da matriz
    
letras = ["B", "A", "C"]

for letra in sorted(letras):
    print(letra)  # Saída: A, B, C

for letra in reversed(letras):
    print(letra)  # Saída: C, A, B
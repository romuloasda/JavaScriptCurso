# Tudo o que vem da função input() entra no programa como String (str), mesmo que o usuário digite apenas números!

# Para realizar operações matemáticas ou comparações numéricas com valores digitados pelo usuário, é necessário converter o texto recebido para o tipo numérico desejado.

# 3.1 Funções de Conversão Comuns
# int(): Converte para número inteiro.

# float(): Converte para número decimal.

# str(): Converte qualquer valor em texto.

# bool(): Converte para valor booleano.

# O usuário digita: "10 20"
# num1, num2 = input("Digite dois números separados por espaço: ").split()

# # Como o input devolve string, convertemos individualmente [cite: 12]
# num1 = int(num1) [cite: 14]
# num2 = int(num2) [cite: 14]

# print(f"Soma: {num1 + num2}")

# Alinhamento e preenchimento:
# f"{nome:>10}" $\rightarrow$ Alinha à direita em 10 caracteres.
# f"{nome:<10}" $\rightarrow$ Alinha à esquerda em 10 caracteres.
# f"{nome:^10}" $\rightarrow$ Centraliza em 10 caracteres.

nome_produto = input("Digite o nome do produto: ")
preco_produto = int(input("Digite o preço do produto: "))
qtd = int(input("Qual a quantidade de produtos: "))
porcentagem = int(input("Qual a porcentagem de desconto: "))

total_sem_desconto = preco_produto * qtd
total_porcentagem = preco_produto * porcentagem / 100
total_preco_com_desconto = (preco_produto - total_porcentagem) * qtd

print(f"=== RESUMO DA COMPRA === \nNome do produto: {nome_produto}. \nPreço do produto: {preco_produto:.2f} \nSubtotal Bruto: {total_sem_desconto:.2f} \n Desconto Aplicado (10%): {total_porcentagem:.2f} \nTotal Final a Pagar: {total_preco_com_desconto:.2f} ")
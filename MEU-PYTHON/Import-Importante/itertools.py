from itertools import zip_longest, product

letras = ["A", "B"]

numeros = [1, 2]

for letra, numero in zip_longest(letras, numeros):
	print(f"{letra}-{numero}") 

for letra, numero in product(letras, numeros):
	print(f"{letra} - {numero}")




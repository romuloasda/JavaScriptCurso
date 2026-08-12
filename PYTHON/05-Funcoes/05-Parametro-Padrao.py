import random

# Parametro Padrão Sera o numero 6
def gerar(qtd=6):
	aposta = []

	if 6 <= qtd <= 20:
		aposta = random.sample(range(1, 61), qtd)
		aposta.sort()

	return aposta


print(gerar())
print(gerar(8))



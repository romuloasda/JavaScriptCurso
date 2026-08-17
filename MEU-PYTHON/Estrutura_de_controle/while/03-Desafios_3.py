# fila_clientes = ["Cli-101", "Cli-102", "Cli-103"]
# saldo_caixa = 500.00

# while fila_clientes:
# 	cliente_atual = fila_clientes.pop(0)
# 	print(f"\n--- Processando pagamento de {cliente_atual} ---")
# 	try:
# 		valor_fatura = float(input("\nQual o valor da fatura: "))
# 		while True:
# 			if valor_fatura > 0:
# 				saldo_caixa += valor_fatura
# 				print(f"✅ Pagamento de R$ {valor_fatura:.2f} registrado com sucesso!")
# 				break
# 			else:
# 				print("O valor da fatura deve ser maior que zero")
# 	except ValueError:
# 		print('Erro')
# print(f"R$ {saldo_caixa:.2f}")

import time

contagem = 2
while contagem > 0:
	time.sleep(1)
	contagem -= 1

energia = 15
itens = 0

while energia >= 5 and itens < 2:
	energia -= 5
	itens += 1
print(energia, itens)

rodadas = 0

try:
	while True:
		if rodadas == 5:
			print(f"Rodadas {rodadas}")
			time.sleep(3)
			rodadas += 1
			break
except KeyboardInterrupt:
	print("Encerrado pelo usuario")



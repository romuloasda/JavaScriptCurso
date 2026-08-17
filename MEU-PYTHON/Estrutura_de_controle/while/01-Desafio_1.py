x = 1
while x <= 4:
	print(x)
	x += 1

cont = 1

while True:
	if cont == 3:
		print(cont)
		break
	cont += 1

i = 0

while i < 5:
	i += 1
	if i == 3:
		continue
	print(i)

contagem = 1

while contagem <= 3:
	contagem += 1
else:
	print("Fim do laço")

ativo = True
total = 0

while ativo:
	total += 5
	if total >= 20:
		ativo = False
		print(ativo)

while True:
	sim_nao = input("Digi (S/N)").strip().upper()
	if sim_nao == "N":
		break
	else:
		print("Opção recebida com sucesso")
# Com parametro e com retorno

def contaGorjeta(conta, percentual):
	gorgeta = conta * percentual
	return conta + gorgeta


total = contaGorjeta(100, 0.1)
print(total)
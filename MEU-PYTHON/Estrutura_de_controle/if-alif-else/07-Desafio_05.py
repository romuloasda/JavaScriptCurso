saldo = 150.00
bot = True
match saldo:
	case s if s > 100:
		print("Saldo Positivo e Seguro")
	case s if 0 <= s <= 100:
		print("Saldo Baixo: Atenção")
	case _:
		print("Saldo Negativo")



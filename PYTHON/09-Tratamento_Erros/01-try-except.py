zero = 0

try:
	divisor = zero
	resultado = 1000 / divisor
	print(resultado)
except ZeroDivisionError:
	print("Não é possivel dividir por zero")
except 	Exception as e:
	print("Um erro aconteceu")
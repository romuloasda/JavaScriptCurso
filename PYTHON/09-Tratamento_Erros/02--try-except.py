zero = 5

def executar_div(tentativas=0):
	try:
		divisor = int(zero)
		return 1000 / divisor
	except Exception as e:
		if tentativas >= 5:
			raise e
		print(e)
		return executar_div(tentativas + 1)

resultado = executar_div()
print(resultado)
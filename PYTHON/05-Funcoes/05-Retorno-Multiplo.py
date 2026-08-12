def divInt(a, b):
	quociente = a // b
	resto = a % b
	# Se colocar retorno separado por virgula ele encapsula como TUPLA
	return quociente, resto


resultado = divInt(10,3)
print(resultado)

# Esse é o destruction do python
(q, r) = divInt(10, 3)
print(q)
print(r)
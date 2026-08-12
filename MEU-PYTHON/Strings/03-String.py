def invertendo_string(nome):
	return "".join(reversed(nome))

eu = invertendo_string('olumor')
print(eu)

def primeira_maiuscula(nome):
	return nome.capitalize()

print(primeira_maiuscula(eu))

def verificar_inicio_exato_string(nome):
	palavra = "palavra"
	if (palavra.startswith(nome)):
		return nome
	else:
		return f"{nome} não pertence a palavra"

print(verificar_inicio_exato_string('pa'))


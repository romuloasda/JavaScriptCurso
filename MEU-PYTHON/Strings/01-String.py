def maiuscula(nome):
	return nome.upper()

print(maiuscula('Romulo'))

def menuscula(nome):
	return nome.lower()

print(menuscula(maiuscula('rOmUlo')))

def sem_espacos(nome):
	return nome.strip()

print(sem_espacos('   romylo'))

def substitui_palavra(nome):
	return nome.replace("o", "a")

print(substitui_palavra('Bonono'))

# Um dos mais importantes .split

def divide_string_em_lista(nome):
	return nome.split(" ")

lista = divide_string_em_lista('Romulo Alameda')
print(lista)

print(len(lista[0]))

justaLista = " ".join(lista)
print(justaLista)

# ---------------------------------------------------
texto = "PYTHON"

# Índices positivos (esquerda para a direita)
print(texto[0])  # Output: 'P'
print(texto[3])  # Output: 'H'

# Índices negativos (direita para a esquerda)
print(texto[-1]) # Output: 'N' (último elemento)
print(texto[-2]) # Output: 'O'


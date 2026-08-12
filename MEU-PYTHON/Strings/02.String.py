def extrair_trexos(nome, id1, id2):
	return nome[id1:id2].upper()

texto = extrair_trexos('Programação',0,8) #extraindo o nome PROGRAMA
print(texto)

def invertendo_string(nome):
	return nome[::-1].upper()

texto = invertendo_string('Programação')
print(texto)



frase = "Programacao"

# Sintaxe: [início:fim]
print(frase[0:7])   # Output: 'Programa'

# Omitindo início ou fim
print(frase[:7])    # Do começo até o índice 6 -> 'Programa'
print(frase[7:])    # Do índice 7 até o fim -> 'cao'

# Usando o Passo (Step)
print(frase[::2])   # Pega de 2 em 2 caracteres -> 'Pgamao'
print(frase[::-1])  # Inverte a string inteira -> 'oacamargorP'
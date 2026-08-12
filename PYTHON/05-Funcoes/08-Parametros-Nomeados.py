from string import ascii_uppercase, ascii_lowercase, digits, punctuation
import random

def criar_senha(tamanho, maiuscula, menuscula, numeros, simbolos):
	caracteres = "".join([
		ascii_uppercase if maiuscula else "",
		ascii_lowercase if menuscula else "",
		digits if numeros else "",
		punctuation if simbolos else ""
	])

	senha = random.choice(caracteres, k=tamanho)
	senha = "".join(senha)
	return senha
	


nova_senha = criar_senha(
	tamanho=10,
	maiuscula=True,
	menuscula=True,
	numeros=False,
	simbolos=True,
)
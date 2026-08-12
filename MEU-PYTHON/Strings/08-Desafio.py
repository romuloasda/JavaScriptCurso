usuarios = [
    {"email": "  CARLOS.SILVA@EMAIL.COM  ", "senha": "Senha123"},
    {"email": "ana_dev@empresa.com.br", "senha": "curta"},
    {"email": "joao.pedro@gmail.com", "senha": "sem_numeros_aqui"}
]


for usuario in usuarios:
	email_formatado = usuario["email"].strip().lower()
	senha_formatada = usuario["senha"]
	depois_do_arroba = email_formatado[email_formatado.find("@"):]
	antes_do_arroba = email_formatado[:email_formatado.find("@")]
	primeira_letra = email_formatado[0][0]
	ultima_letra = antes_do_arroba[-1][-1]

	email_completo_formatado = f"{primeira_letra}***{ultima_letra}{depois_do_arroba}  "

	if len(senha_formatada) >= 8 and any(c.isdigit() for c in senha_formatada):
		print(f"{email_completo_formatado}-> E-mail mascarado e Senha VÁLIDA!")
	else:
		print(f"{email_completo_formatado}-> Senha INVÁLIDA (recomenda-se 8+ caracteres e números).")






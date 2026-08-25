precos = [100, 200, 300]

precos_com_desconto = [n - 10 for n in precos]
print(precos_com_desconto)

idades = [15, 22, 17, 30, 14, 40]

apenas_maiores = [n for n in idades if n >= 18]
print(apenas_maiores)

numeros = [1, 2, 3, 4, 5, 6]

tipo_numero = ["PAR" if n % 2 == 0 else "IMPAR" for n in numeros]
print(tipo_numero)

emails_brutos = ["  admin@site.com ", "teste@", " DEV@CORP.COM  ", "user@"]

email_validos = [email.strip().lower() for email in emails_brutos]
print(email_validos)

gavetas = [["Meias", "Cuecas"], ["Camisas", "Casacos"]]

todas_as_roupas = [item for linha in gavetas for item in linha]
print(todas_as_roupas)
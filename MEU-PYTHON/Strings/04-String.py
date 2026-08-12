codigo = "USR-9482-BR"

# Checagens booleanas
print(codigo.startswith("USR")) # Retorna True
print(codigo.endswith("BR"))   # Retorna True
print(codigo.isalnum())        # False (contém hífens)

# Busca e Substituição
print(codigo.find("9482"))     # Retorna o índice onde começa (4)
print(codigo.replace("BR", "US")) # Substitui 'BR' por 'US' [cite: 11]
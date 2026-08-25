registros_brutos = [
    "  cli_101 : CARLOS SILVA : 250.0 : SP  ",
    "cli_102:ana lima:80.0:rj",
    "  cli_103 : BEATRIZ SOUZA : 1200.0 : MG  ",
    "cli_104:pedro santos:45.0:SP",
]

registros_limpos = [nome.split(':') for nome in registros_brutos]
id_clientes = [nome[0].strip() for nome in registros_limpos]
nome_formatado = [nome[1].strip().lower().capitalize() for nome in registros_limpos]
valor_float = [float(valor[2]) for valor in registros_limpos]
estado = [es[3].strip().upper() for es in registros_limpos]
print(id_clientes)
print(nome_formatado)
print(valor_float)
print(estado)

registros_limpos = [id_clientes, nome_formatado, valor_float, estado]
print(registros_limpos)

lista = []
numero = 4
lista2 = []

lista_separada = [list(linha) for list(linha) in zip(*registros_limpos)]
print(lista_separada)
for reg in registros_limpos:
	lista2.append(reg[numero])
	lista.append(lista2)
	if numero == 0:
		break
	numero -= 1

	
	
print(lista)


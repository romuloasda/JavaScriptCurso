transacoes_brutas = [
    " ELETRONICOS : mouse gamer : 120.50 : aprovado ",
    "vestuario: CAMISA POLO : 80.00 : aprovado",
    "  ELETRONICOS : teclado mecanico : 350.00 : pendente ",
    "livros: python avancado : 65.00 : aprovado",
    "  VESTUARIO : calca jeans : 150.00 : aprovado ",
    "eletronicos: monitor 144hz : 1100.00 : aprovado",
    "alimentos: cafe especial : invalido : aprovado"
]

dicionario = {}
nova_lista = [nome.strip().split(':') for nome in transacoes_brutas]

for lista in nova_lista:
	try:
		preco_formatado = float(lista[2])
		novo_dicionario = {
			lista[0].upper(): lista[1], 
			'preco': preco_formatado, 
			'status': lista[3]}		
		dicionario.update(novo_dicionario)

	except ValueError:
		print(f"ERRO: Não foi possível converter o preço do item '{lista[1]}'")

print(dicionario)
print(nova_lista)


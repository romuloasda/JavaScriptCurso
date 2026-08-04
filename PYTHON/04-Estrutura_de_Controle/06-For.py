funcionario = {
	"nome": "Maria",
	"salario": 5000.22,
	"idade": 34,
	"ativo": True
}

for chave in funcionario:
	print(chave)

for chave in funcionario.keys():
	print(chave, funcionario[chave])

for valor in funcionario.values():
	print(valor)

for chave, valor in funcionario.items():
	print(chave, valor)
funcionario = {
	"nome": "joão pedro",
	"idade": 31,
	"cidade": "PE",
	"ativo": True
}

print(funcionario.get('nome'))

print(funcionario.get('salario', 0))

print(funcionario.keys())
print(funcionario.values())
print(funcionario.items())
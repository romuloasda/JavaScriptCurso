funcionario = {
	"nome": "joão pedro",
	"idade": 31,
	"cidade": "PE",
	"ativo": True
}

funcionario["ativo"] = False
print(funcionario["ativo"])

funcionario.update({"idade": 27, "ativo": True, "profissão": "Reporter"})
print(funcionario)

# .clear() deixa a lista ou dicionario vazio
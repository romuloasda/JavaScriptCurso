cidades = ["Curitiba", "Recife", "Manaus", "Brasília"]
pos_recife = ""

if "Recife" in cidades:
	pos_recife = cidades.index("Recife")
	print(pos_recife)

palavras = ["elefante", "sol", "computador", "lua"]
palavras.sort(key=len)
print(palavras)

sequencia = [1, 2, 3, 4, 5]
sequencia_invertida = sequencia[::-1]
print(sequencia_invertida)


grade_conexoes = [["Sessao-A1", "Sessao-A2"], ["Sessao-B1", "Sessao-B2"]]

registro = ["ID-9821", "admin_root", "Ativo", "192.168.0.1", "Porta-8080"]

sessao_critica = grade_conexoes[1][0]
print(sessao_critica)

id_usuario, login, *metadados = registro
print(id_usuario, login)
print(metadados)

status_padrao = ["ok"] * 3
print(status_padrao)
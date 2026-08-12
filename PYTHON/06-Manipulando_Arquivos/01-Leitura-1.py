import os

pasta_atual = os.path.dirname(__file__)
caminho_arquivo = os.path.join(
	pasta_atual, 'legendas', 'legendas_03.srt'
)


# with open(caminho_arquivo, 'r') as arquivo:
# 	conteudo = arquivo.read()
# 	print(conteudo)

# with open(caminho_arquivo, 'r') as arquivo:
# 	linha = arquivo.readline()
# 	while linha:
# 		partes = linha.split()
# 		inicio = partes[0] if partes else ""

# 		print(inicio, end=", ")

# 		linha = arquivo.readline()


with open(caminho_arquivo, 'r') as arquivo:
	for linha in arquivo:
		print(linha[:5], end='*')
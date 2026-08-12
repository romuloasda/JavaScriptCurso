import os

pasta_atual = os.path.dirname(__file__)
caminho_arquivo = os.path.join(
	pasta_atual, 'texto', 'texto-01.txt'
)

with open(caminho_arquivo, 'w') as arquivo:
	arquivo.write("Olá ! Estou criando um arquivo")


linhas = [
	"Escrevendo multiplas linhas",
	"em um arquibo de texto",
	"com Python"
]

with open(caminho_arquivo, 'a') as arquivo:
	arquivo.writelines("\n" + linha for linha in linhas)
	# for linha in linhas:
	# 	arquivo.writelines(f"{linha}\n")
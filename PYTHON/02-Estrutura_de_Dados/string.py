primeiro_nome = 'Guilherme'
sobrenome = 'Bianco'

nome_completo = primeiro_nome + " " + sobrenome
print(nome_completo)

h = input ('Informe a hora: ')
m = input ('Informe minutos: ')
s = input ('Informr segundos: ')

dt_formatada = "{}h {}m {}s"
print(dt_formatada.format(h,m,s))

texto = """
	Este é um exemplo
	de quebra de Linha
"""

print(texto)

print(texto.upper())
print(texto.find('Linha'))

lista_palavras = texto.split()
print(lista_palavras)
print(" ".join(lista_palavras))

print(len(texto))

valor = '1234.56'
print(valor.isnumeric())

real ='123.45'
print(real.replace(".", "",1).isnumeric())
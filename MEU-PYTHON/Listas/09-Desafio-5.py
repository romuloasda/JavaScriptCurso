codigos = ["A", "B", "C", "D"]
codigos[1:3] = ["X", "Y", "Z"]
print(codigos)

padrao = [10, 20]
padrao *= 3
print(padrao)

fila = ["p1", "p2", "p3"]
del fila[:]
print(fila, len(fila))

buffer_mensagens = ["MSG-1", "MSG-2", "MSG-3", "MSG-4", "MSG-5"]

padrao_sincronia = ["SYNC"]

padrao_sincronia *= 3
print(padrao_sincronia)

buffer_mensagens[1:4] = padrao_sincronia
print(buffer_mensagens)

buffer_seguro = buffer_mensagens.copy()
del buffer_mensagens[:]

print(buffer_seguro, buffer_mensagens, padrao_sincronia)

auditoria = [True, True, False]

tudo_aprovado = all(auditoria)
algum_aprovado = any(auditoria)
print(tudo_aprovado, algum_aprovado)


arquivos = ["doc.txt", "imagem_super_pesada.png", "script.py"]
maior_arquivo = max(arquivos, key=len)
print(maior_arquivo)

entradas = ["dados", "", "123"]
sem_vazios = all(entradas) 
print(sem_vazios)

relatorios = ["auth_fail.log", "db_critical_dump.log", "access.log", "sys_temp.log"]
arquivo_longo = max(relatorios, key=len)

status_sincronia = [True, True, True, False]
ativos = all(status_sincronia)

erros_detectados = [False, False, False, False]
algum_erro = any(erros_detectados)

print(arquivo_longo, ativos, algum_erro)

precos = [10.0, 20.0, 30.0]
precos_dobrados = list(map(lambda x: x * 2, precos))
print(precos_dobrados)

idades = [12, 18, 25, 14, 30]
maiores = list(filter(lambda m: m >= 18, idades))
print(maiores)

estoque = [["Teclado", 50], ["Mouse", 20], ["Monitor", 100]]
estoque.sort(key=lambda i: i[1])
print(estoque)

pecas = [["Gabinete", 150.0, 5], ["Placa-Mae", 600.0, 2], ["Fonte", 250.0, 8], ["RAM", 180.0, 0]]

maior_zero = list(filter(lambda x: x[2] > 0, pecas))
print(maior_zero)

# total = [x[1] * x[2] for x in maior_zero]
# print(total)
total = 0
for soma in maior_zero:
	mult = soma[1] * soma[2]
	total += mult
	print(soma[1], " X ", soma[2], " = ", mult, "TOTAL = ",total )

pecas.sort(key=lambda d: d[1], reverse=True)
print(pecas)

	
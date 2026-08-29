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

colunas = [id_clientes, nome_formatado, valor_float, estado]

registros_limpos = []

for i in range(len(colunas)):
	clientes = []
	for coluna in colunas:
		clientes.append(coluna[i])
	registros_limpos.append(clientes)
print(registros_limpos)

registro_temporario = [
	"PREMIUM" if valor[2] >= 500 
	else "PADRÃO" if 100 < valor[2] <= 499
	else "ECONOMICO"
	for valor in registros_limpos ]
print(registro_temporario)

fila_processamento = registros_limpos.copy()
total_arrecadado = 0.0

print(fila_processamento)

while fila_processamento:
	cliente1 = fila_processamento.pop(0)
	cliente2 = fila_processamento.pop(0)
	total_arrecadado = cliente1[2] - cliente2[2]
	print(f"Processado: {cliente1[2]} - R$ {cliente2[2]:.2f}")
else:
	print(f"Todos os pedidos foram processados! Total: R$ {total_arrecadado:.2f}")

for indice, (categoria, registro) in enumerate(
	zip(registro_temporario, registros_limpos), start=1):
	print(f"{indice}. [{categoria}] {registro[1]} ({registro[3]}) - {registro[2]}")

#  Resolucao IA

registros_brutos = [
    "  cli_101 : CARLOS SILVA : 250.0 : SP  ",
    "cli_102:ana lima:80.0:rj",
    "  cli_103 : BEATRIZ SOUZA : 1200.0 : MG  ",
    "cli_104:pedro santos:45.0:SP",
]

# Etapa 1: Limpeza e Normalização
registros_limpos = [
    [
        item[0].strip().lower(),
        item[1].strip().title(),
        float(item[2].strip()),
        item[3].strip().upper(),
    ]
    for r in registros_brutos
    for item in [r.split(":")]
]

# Etapa 2: Triagem Condicional
categorias = [
    "PREMIUM" if reg[2] >= 500.0
    else "PADRAO" if reg[2] >= 100.0
    else "ECONOMICO"
    for reg in registros_limpos
]

# Etapa 3: Fila de Processamento
fila_processamento = registros_limpos.copy()
total_arrecadado = 0.0

print("=== PROCESSAMENTO DA FILA ===")
while fila_processamento:
    cliente = fila_processamento.pop(0)
    total_arrecadado += cliente[2]
    print(f"Processado: {cliente[1]} - R$ {cliente[2]:.2f}")
else:
    print(f"Todos os pedidos foram processados! Total: R$ {total_arrecadado:.2f}\n")

# Etapa 4: Relatório Final
print("=== RELATÓRIO DE AUDITORIA ===")
for indice, (cat, reg) in enumerate(zip(categorias, registros_limpos), start=1):
    print(f"{indice}. [{cat}] {reg[1]} ({reg[3]}) - R$ {reg[2]:.2f}")

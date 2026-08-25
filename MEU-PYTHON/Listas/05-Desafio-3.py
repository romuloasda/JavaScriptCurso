remessas = ["Caixa-Grande", "Pacote", "Envelope", "Container", "Caixa-Media"]

if "Container" in remessas:
	posicao = remessas.index("Container")
	carga_pesada = remessas.pop(posicao)
	print(remessas)

remessas_por_tamanho = remessas.copy()
remessas_por_tamanho.sort(key=len)
print(remessas_por_tamanho)

fila_reversa = remessas[::-1]
print(fila_reversa)

tabuleiro = [["A1", "A2"], ["B1", "B2"]]

posicao_b1 = tabuleiro[1][0]
print(posicao_b1)

dados = ["Carlos", 28, "Dev", "Brasil", "Ativo"]
nome, idade, *demais = dados
print(nome, idade, "\n", demais)

zeros = [0] * 4
uniao = zeros + [1,2]
print(uniao)

pontuacoes = [85, 92, 78, 90, 88]
soma = sum(pontuacoes)
menor_nota = min(pontuacoes)
maior_nota = max(pontuacoes)

pesos = [70.5, 62.0, 85.3, 59.0]
pesos_ordenados = sorted(pesos)

sequencia = list(range(1,6))
print(sequencia)

transacoes = [1500.0, -200.0, 3400.0, -50.0, 8900.0, 120.0]
qtd_operacoes = len(transacoes)
menor_valor = min(transacoes)
maior_valor = max(transacoes)
inverso = list(reversed(sorted(transacoes)))
print(qtd_operacoes, menor_valor, maior_valor, inverso)
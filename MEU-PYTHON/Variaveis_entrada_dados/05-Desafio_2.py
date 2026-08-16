valor_bruto_transicao = input('Digite o valor bruto da transação (R$): ')

TAXA_PROCESSAMENTO = 2.50

try:
	transicao = float(valor_bruto_transicao)
except ValueError:
	print("Entrada Invalida")

tipo_transicao = input("Digite o tipo da transação (Crédito / Débito): ").strip()

if tipo_transicao == 'credito':
	tipo_transicao = 'CRÉDITO'
elif tipo_transicao == 'debito':
	tipo_transicao = 'Débito'
else:
	print("Você selecionou uma operação invalida")

valor_liquido_transicao = transicao - TAXA_PROCESSAMENTO

print(f"=== RESUMO DA TRANSAÇÃO ===\n Tipo de Operação: {tipo_transicao}\n Valor Bruto: R$ {valor_bruto_transicao}\n Taxa de Processamento (Fixa): {TAXA_PROCESSAMENTO}\n Valor Líquido creditado: {valor_liquido_transicao}")

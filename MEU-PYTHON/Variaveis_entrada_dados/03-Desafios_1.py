valores_conta = input("Digite o valor da conta em Dólar (USD) e a cotação do Dólar em Reais (BRL): ").split()

valor_em_reais = float(valores_conta[0]) * float(valores_conta[1])

quantidade_pessoas = int(input("Digite a quantidade de pessoas que vai dividir a conta: "))

valor_por_pessoa = valor_em_reais / quantidade_pessoas

print(f"=== RESUMO DA CONTA === \nValor Total (USD): {valores_conta[0]}\nValor Total (BRL): R$ {valor_em_reais} Quantidade de Pessoas: 4 \nValor por Pessoa: R$ {valor_por_pessoa}")
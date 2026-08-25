vendas_brutas = [
    [101, "  teclado rgb  ", 150.0, "pago"],
    [102, " MOUSE GAMER ", 80.0, "pendente"],
    [103, "  monitor 144hz ", 1200.0, "pago"],
    [104, " HEADSET ", 250.0, "cancelado"],
    [105, " mousepad  ", 45.0, "pago"],
]

produtos_pagos = [
	vendas[1].strip().title()
	for vendas in vendas_brutas
	if vendas[3] == "pago"
]

print(produtos_pagos)

produtos_com_desconto = [
	vendas[2] * 0.90 if vendas[2] >= 100 else vendas[2]
	for vendas in vendas_brutas
]

print(produtos_com_desconto)

produtos_vip =[
	vendas[1].strip().title()
	for vendas in vendas_brutas
	if vendas[3] == "pago" and vendas[2] > 100
]

print(produtos_vip)



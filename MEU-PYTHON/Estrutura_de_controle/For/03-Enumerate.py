tarefas = ["Estudar", "Treinar", "Descansar"]

# start=1 faz a contagem começar em 1 (o padrão seria 0)
for indice, tarefa in enumerate(tarefas, start=1):
    print(f"{indice}. {tarefa}")

lista_produtos = ["Notebook", "Headset", "Teclado Mecânico", "Monitor 144Hz"]

quantidades_vendidas = [12, 45, 30, 8]

precos_unitarios = [3500.00, 150.00, 250.00, 1200.00]

faturamento_total = 0.0

# O enumerate numera a iteração, e o zip agrupa as suas listas
for indice, (produto, vendas, preco) in enumerate(zip(lista_produtos, quantidades_vendidas, precos_unitarios), start=1):
    print(f"Produto {indice}: {produto} | Preço: R$ {preco} | Quantidade de vendas: {vendas}")
    faturamento_total += vendas * preco
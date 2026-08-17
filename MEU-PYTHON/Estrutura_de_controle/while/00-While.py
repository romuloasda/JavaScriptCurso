contador = 0

while contador <= 3:
	print(contador)
	contador +=1


numero = 1

while True:  # Laço teoricamente infinito
    print(f"Executando volta {numero}")
    if numero == 2:
        print("Parando agora!")
        break  # Sai do laço imediatamente
    numero += 1

contador = 0

while contador < 4:
    contador += 1
    if contador == 2:
        continue  # Pula o print do número 2 e vai direto pro contador = 3
    print(f"Processando: {contador}")

tentativas = 0
while tentativas < 3:
    tentativas += 1
    # Se o laço terminar sem interrupção forçada (sem break)...
else:
    print("Tentativas esgotadas sem interrupção!")

linha = 1
while linha <= 2:
    coluna = 1
    while coluna <= 3:
        print(f"[{linha}, {coluna}]", end=" ")
        coluna += 1
    print()  # Quebra a linha ao fim do laço interno
    linha += 1

# O Padrão "Loop de Menu Interativo"

while True:
    opcao = input("Deseja continuar? (S/N): ").strip().upper()
    if opcao == "N":
        print("Encerrando o programa...")
        break
    elif opcao == "S":
        print("Executando novamente...")
    else:
        print("Opção inválida, tente novamente.")

# Acumuladores e Flags Booleanas
# Flag Booleana: Uma variável do tipo bool usada como sinalizador de parada no lugar de um while True

executando = True  # Flag booleana
soma_total = 0     # Acumulador

while executando:
    soma_total += 10
    if soma_total >= 30:
        executando = False  # Altera a flag para encerrar no próximo ciclo

fila_pedidos = ["Pedido #1", "Pedido #2", "Pedido #3"]

# O laço roda enquanto a lista NÃO estiver vazia
while fila_pedidos:
    pedido_atual = fila_pedidos.pop(0)  # Remove e pega o primeiro item
    print(f"Processando: {pedido_atual}")

print("Todos os pedidos foram processados!")

while True:
    try:
        idade = int(input("Digite sua idade: "))
        if idade > 0:
            print(f"Idade válida: {idade}")
            break
        print("A idade deve ser maior que zero.")
    except ValueError:
        print("Erro: Digite apenas números inteiros!")

import time

tempo_restante = 3

while tempo_restante > 0:
    print(f"Aguardando... {tempo_restante}s")
    time.sleep(1)  # Pausa a execução por 1 segundo
    tempo_restante -= 1

print("Tempo esgotado!")

import time

try:
    while True:
        print("Serviço em execução... (Pressione Ctrl+C para parar)")
        time.sleep(1)
except KeyboardInterrupt:
    print("\n🛑 Serviço interrompido com segurança pelo operador.")

saldo = 100
tentativas = 0

# O laço só roda se AMBAS as condições forem atendidas
while saldo > 0 and tentativas < 3:
    print(f"Tentativa {tentativas + 1} | Saldo atual: R$ {saldo}")
    saldo -= 40
    tentativas += 1
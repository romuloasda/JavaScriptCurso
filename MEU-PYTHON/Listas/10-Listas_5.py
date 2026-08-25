# Nível 15: Estruturas de Dados Avançadas com Coleções (collections.deque e Listas Encadeadas)
# 
# collections.deque: Lista duplamente encadeada de alta performance. Inserções e remoções no início (.appendleft() e .popleft()) executam em complexidade temporal $O(1)$, enquanto em listas convencionais .insert(0, ...) e .pop(0) custam $O(n)$ por terem de deslocar todos os itens da memória.
# 
# deque(maxlen=N): Cria um buffer circular com tamanho fixo. Ao inserir novos itens além do limite $N$, os elementos mais antigos são descartados automaticamente pela extremidade oposta.
# 
# .rotate(n): Rotaciona os elementos da fila para a direita (positivo) ou para a esquerda (negativo).

from collections import deque

fila_rapida = deque(["A", "B", "C"])
fila_rapida.appendleft("VIP")  # Inserção instantânea no topo: O(1)
atendido = fila_rapida.popleft() # Remoção instantânea do início: O(1)

# Buffer circular fixo:
historico = deque(maxlen=3)
historico.extend([1, 2, 3])
historico.append(4)  # 1 é descartado automaticamente -> deque([2, 3, 4])

# DESAFIO

from collections import deque

atendimento = deque(["Cliente-2", "Cliente-3"])
atendimento.appendleft("Cliente-1")
print(atendimento)

proximo = atendimento.popleft()
em_espera = ", ".join(atendimento)
print(f"Proximo: {proximo} \n Em espera: {em_espera}")

ultimos_logs = deque(maxlen=2)
ultimos_logs.extend(["LOG-1", "LOG-2"])
ultimos_logs.append(["LOG-3"])
print(ultimos_logs)

painel = deque([10, 20, 30])
painel.rotate(1)
print(painel)

fila_atendimento = deque(["Req-02", "Req-03", "Req-04"])
historico_recente = deque(maxlen=3)
fila_atendimento.extend(["Req-VIP"])
historico_recente.extend([fila_atendimento.popleft()]) 
historico_recente.extend([fila_atendimento.popleft()]) 
print(fila_atendimento, historico_recente)

fila_atendimento.extend(["Req-98", "Req-99"])
fila_atendimento.rotate(1)
print(fila_atendimento)
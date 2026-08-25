# Nível 16: Listas como Pilhas (LIFO) e Filas (FIFO)
# 
# Pilha (Stack - LIFO): O último a entrar é o primeiro a sair. Usa-se .append() (empilhar) e .pop() (desempilhar do topo) em O(1)
# 
# Fila (Queue - FIFO): O primeiro a entrar é o primeiro a sair. Implementada com collections.deque usando .append() (enfileirar) e .popleft() (desenfileirar) em O(1).

# Pilha (Stack)
pilha = []
pilha.append("pagina_1")
pilha.append("pagina_2")
topo = pilha.pop()  # "pagina_2"

# Fila (Queue) com deque
from collections import deque
fila = deque()
fila.append("doc_1")
fila.append("doc_2")
primeiro = fila.popleft()  # "doc_1"

# -----DESAFIO-------------------------

navegacao = []

navegacao.append("home")
navegacao.append("perfil")
pagina_anterior = navegacao.pop(-1)
print(navegacao)

impressao = deque(["doc_a", "doc_b"])
impressao.append("dec_c")
doc_impresso = impressao.popleft()
print(impressao)

livros = ["Livro A", "Livro B", "Livro C"]
topo = livros[-3]
print(topo, livros)

historico_navegador = ["site.com", "[site.com/docs](https://site.com/docs)", "[site.com/api](https://site.com/api)"]

fila_execucao = deque(["Job-1", "Job-2", "Job-3"])

fila_execucao.append(historico_navegador[-1])
pagina_fechada = fila_execucao.pop()
print(historico_navegador[-1])
fila_execucao.pop()
fila_execucao.appendleft("Job-VIP")
print(fila_execucao)


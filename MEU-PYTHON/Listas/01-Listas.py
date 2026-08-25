# Nível 1: Criação, Indexação e Fatiamento

itens = ["Mouse", "Teclado", "Monitor", "Headset"]

primeiro = itens[0]    # "Mouse"
ultimo = itens[-1]     # "Headset"
recorte = itens[1:3]   # ['Teclado', 'Monitor'] (o índice final 3 é excluído)

# Nível 2: Adicionando Elementos

# .append(item): Insere o elemento no final da lista.

# .insert(indice, item): Insere o elemento na posição exata informada.

#  .extend(iteravel): Concatena todos os itens de outra lista ao final da lista atual.

# Nível 3: Removendo Elementos

compras = ["Arroz", "Feijão"]
compras.append("Macarrão")      # ['Arroz', 'Feijão', 'Macarrão']
compras.insert(1, "Azeite")     # ['Arroz', 'Azeite', 'Feijão', 'Macarrão']
compras.extend(["Sal", "Café"]) # Concatena ao final

# .pop(indice): Remove e retorna o item da posição (se omitir o índice, remove o último).

# .remove(valor): Remove a primeira ocorrência do valor informado.

# .clear(): Esvazia toda a lista.

fila = ["A", "B", "C", "B"]
atendido = fila.pop(0)  # Remove 'A' e guarda na variável
fila.remove("B")        # Remove apenas o primeiro 'B'
# fila agora é: ['C', 'B']

# Nível 4: Busca, Contagem e Ordenação

# .count(valor): Retorna quantas vezes o valor aparece.

# .index(valor): Retorna a posição do índice da primeira ocorrência.

# .sort(): Ordena a lista diretamente na memória (reverse=True para ordem decrescente).

# .reverse(): Inverte a ordem atual dos itens.

numeros = [40, 10, 30, 20]
numeros.sort()          # [10, 20, 30, 40]
numeros.reverse()       # [40, 30, 20, 10]
qtd_10 = numeros.count(10) # 1

# Aprofundamento: Cópia vs Referência e Fatiamento Avançado

# Referência de Memória: Atribuir lista_b = lista_a faz ambas as variáveis apontarem para o mesmo objeto. Alterar uma altera a outra.

# Cópia Rasa (Shallow Copy): Use .copy() ou lista[:] para gerar uma nova lista independente na memória.

# Fatiamento com Passo (Step): A sintaxe lista[inicio:fim:passo] permite saltos ou inversão rápida ([::-1]).

original = [1, 2, 3]
copia = original.copy()
copia.append(99)  # Não altera 'original'

numeros = [0, 1, 2, 3, 4, 5, 6]
pares = numeros[::2]       # [0, 2, 4, 6]
invertida = numeros[::-1]  # [6, 5, 4, 3, 2, 1, 0]
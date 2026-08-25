# Nível 8: Deleção por Fatiamento e Referência (del e lista[:] = [])

# del lista[indice]: Remove um elemento ou uma fatia inteira (del lista[1:4]) da memória sem precisar de .pop().

# lista[:] = [...]: Modifica a lista existente no mesmo endereço de memória, ao invés de criar uma nova variável.

dados = [10, 20, 30, 40, 50]
del dados[1:3]     # Remove os índices 1 e 2 -> [10, 40, 50]

dados[:] = [1, 2]  # Substitui o conteúdo mantendo o mesmo id de memória

# Nível 9: Operações de Associação e Comparações de Listas

# lista_a == lista_b: Compara se os elementos e a ordem são rigorosamente idênticos.

# item in lista: Retorna True ou False para checagem rápida.

# item not in lista: Retorna True se o item não estiver presente.

a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)         # True (mesmo conteúdo)
print(99 not in a)    # True

# Nível 10: Criação Dinâmica e Cópias Profundas (copy.deepcopy)

# [[0] * 3] * 3: Cuidado! Isso replica a mesma referência da lista interna 3 vezes. Alterar uma linha altera todas.

# copy.deepcopy(): Cria uma cópia independente de listas que contêm outras listas aninhadas

import copy

matriz_original = [[1, 2], [3, 4]]
matriz_independente = copy.deepcopy(matriz_original)
matriz_independente[0][0] = 99  # Altera APENAS matriz_independente



# Nível 11: Operações In-Place vs Funções Globais e Métodos de Comparação**

# `lista.reverse()` vs `reversed(lista)` / `lista[::-1]`: O método muta a lista no lugar (`None`), enquanto a função/fatiamento gera um novo iterável/cópia.
# `lista.sort()` vs `sorted(lista)`: O método ordena no mesmo endereço (`in-place`), enquanto a função retorna uma nova lista ordenada.
# `id(lista)`: Função nativa que revela o endereço de memória real do objeto, útil para auditar se duas variáveis compartilham a mesma lista ou não.

# ```python
# x = [3, 1, 2]
# y = sorted(x)        # x continua [3, 1, 2], y é [1, 2, 3]
# print(id(x) != id(y)) # True (são objetos distintos na memória)
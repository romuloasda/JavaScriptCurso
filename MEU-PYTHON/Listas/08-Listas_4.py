# Nível 12: Métodos de Extensão Avançados (*= e Fatiamento Atributivo)

# lista *= n: Multiplica e expande os itens da lista mantendo o mesmo endereço de memória (in-place).

# lista[a:b] = [...]: Substitui, insere ou remove uma fatia inteira sem criar uma nova lista.

# del lista[:]: Esvazia completamente a lista (equivalente funcional a .clear()).

dados = [1, 2, 3]
dados[1:2] = [20, 30]  # Substitui o elemento do índice 1 por [20, 30] -> [1, 20, 30, 3]
dados *= 2            # Duplica a sequência in-place

# Nível 13: Funções Utilitárias com Predicados e Comparação Avançada

# any(iteravel): Retorna True se pelo menos um elemento for avaliado como verdadeiro.

# all(iteravel): Retorna True apenas se todos os elementos forem verdadeiros.

# min(lista, key=...) e max(lista, key=...): Permite buscar o menor ou maior item com base em um critério customizado (como len).

estados = [True, False, True]
tem_verdadeiro = any(estados)  # True
todos_verdadeiros = all(estados)  # False

# palavras = ["sol", "computador", "mar"]
# maior_palavra = max(palavras, key=len)  # "computador"

# Nível 14: Estruturas Avançadas de Lista e Ordenação Customizada

# Chaves de ordenação compostas: lista.sort(key=lambda x: (x[1], x[0])) ordena por múltiplos critérios simultâneos.

# Matrizes irregulares (Ragged Lists): Listas aninhadas com tamanhos diferentes de linhas.

# Conversão de iteradores encadeados: list(filter(...)) e list(map(...)) para transformações funcionais de listas.
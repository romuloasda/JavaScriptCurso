# Nível 5: Métodos Avançados e Busca Segura

# .index(valor, [inicio, fim]): Retorna o índice de um item. Dispara ValueError se o item não existir.

# Operador in: Verifica a existência antes de buscar o índice para evitar erros.

# .sort(key=...): Permite ordenar usando funções personalizadas (ex: key=len ordena pelo tamanho do texto).

# Fatiamento reverso [::-1]: Inverte sem alterar a lista original (diferente de .reverse()).

nomes = ["Beatriz", "Ana", "Carlos"]
if "Ana" in nomes:
    pos = nomes.index("Ana")  # 1

nomes.sort(key=len)  # Ordena por tamanho: ['Ana', 'Carlos', 'Beatriz']
invertida = nomes[::-1]  # Nova lista invertida

# Nível 6: Matrizes, Desempacotamento e Operações em Bloco

# Matrizes (Listas Aninhadas): Acessadas por múltiplos índices matriz[linha][coluna].

# Desempacotamento de Listas: Extrai elementos diretamente para variáveis individuais (a, b, *resto = lista).

# Operador * (Desempacotamento em chamadas): Expande os elementos da lista diretamente como argumentos.

# Concatenação (+) e Replicação (*): [1, 2] + [3] junta listas; [0] * 4 gera [0, 0, 0, 0]

# Acesso em matriz
grade = [
    [10, 20],
    [30, 40]
]
item = grade[1][0]  # 30 (linha 1, coluna 0)

# Desempacotamento com resto
primeiro, segundo, *demais = [1, 2, 3, 4, 5]
# primeiro = 1, segundo = 2, demais = [3, 4, 5]

# Nível 7: Funções Nativas Úteis para Listas

# len(lista): Retorna a quantidade total de elementos.

# sum(lista): Soma todos os números da lista.

# min(lista) e max(lista): Retornam o menor e o maior valor.

# sorted(lista): Retorna uma nova lista ordenada sem alterar a original (diferente de .sort()).

# list(iteravel): Converte sequências (como range ou strings) em lista.

numeros = [10, 5, 20, 15]

total_itens = len(numeros)      # 4
soma = sum(numeros)             # 50
menor = min(numeros)            # 5
maior = max(numeros)            # 20
ordenada = sorted(numeros)      # [5, 10, 15, 20] (numeros continua intacto)
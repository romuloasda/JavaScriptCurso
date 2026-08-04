numeros = [1, 2, 3]
numeros.append(100)

print(numeros) #Saída [1, 2, 3, 100]
  
numeros.insert(1, 200) # Posição que eu quero 1, 200 o que eu quero add na posição

numeros.remove(200)
numeros.remove(100)
print(numeros)

# Pilha (stack) - LIFO -> pop()
pilha_livros = ['MMM', 'DDD', 'Hábitos A']
print(f"Acabei de ler o livro {pilha_livros.pop()}")
print(pilha_livros)

# Fila (Queue) - FIFO -> pop()
fila_lanche = ['Eu', 'tu', 'ele']
print(f"Qual é o seu pedido? {fila_lanche.pop(0)}")
print(f"Qual é o seu pedido? {fila_lanche.pop(0)}")
print(f"Qual é o seu pedido? {fila_lanche.pop(0)}")
# Típicos Básicos - Imutaveis

a = 6
b = 5 + 1

#o id vai mostrar onde esta alocado na memoria
print(id(a), id(b))
print(a is b)
print(a == b)

# Típicos Compostos - Mutaveis

x = [1,2,3]
y = [1,2,3]

print(id(x))
print(id(y))
print(x == y)
print(x is y) #False, estao alocado em espaço de memoria diferente
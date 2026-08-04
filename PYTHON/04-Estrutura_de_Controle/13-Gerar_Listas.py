# Modelo: [exp for ... if ...]
# List Comprehension

base_dois = [2 ** x for x in range(1,21)]
print(base_dois)

numeros = [x * x for x in range(1, 30) if x % 3 != 0]
print(numeros)
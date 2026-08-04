a = 'Texto Original'
# A string em py é imutavel

a.upper()
print(a)

# Por isso nao muda teria que fazer assim

a = a.upper()
print(a)

b = a #copia por valor
b.lower()

print(a, b)
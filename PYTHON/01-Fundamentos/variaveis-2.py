a = 7
b = a

#Antes a tinha 7 agora a é 3

a = 3

print(a,b)

lista_a = [1, 2 , 3]
lista_b = lista_a

lista_b.append(100)

#Eu troquei a lista b e o enderenço da lista a tambem foi modificada, dessa forma como as duas estavam apontando para o mesmo endereço de memoria vai mudar tambem a lista a

print(lista_a)
# Conjuntos, set não aceita valores repetidos, não é indexado

frutas = {"bananas", "maça","laranja", "bananas"}
print(frutas)

frutas.add("uva")

frutas.remove('bananas')

print(frutas)


cjt = {1,2,3}
cjt2 = {3,4,5}
uniao = cjt.union(cjt2)
print(uniao)

intersecao = cjt.intersection(cjt2)
print(intersecao)

diferenca = cjt.difference(cjt2)
print(diferenca)

cjt2.update({5,6})
print(cjt2)
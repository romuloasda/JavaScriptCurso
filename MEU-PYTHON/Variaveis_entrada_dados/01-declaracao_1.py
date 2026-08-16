nome = "Maria"      # Texto (String - str)
idade = 25          # Número inteiro (Integer - int)
altura = 1.68       # Número decimal (Float - float)
ativo = True        # Valor booleano (Boolean - bool)

# Atribuição múltipla em uma única linha
nome, idade, cidade = "Ana", 28, "São Paulo"

# Atribuição do mesmo valor para várias variáveis
x = y = z = 0

a = 5
b = 10

# Troca o valor de 'a' pelo de 'b' e vice-versa
a, b = b, a

print(f"a: {a}, b: {b}")  # Saída: a: 10, b: 5

# Convenção de Constantes (Valores fixos do sistema)
TAXA_IMPOSTO = 0.15
VALOR_MAXIMO_SAQUE = 2000.00
PI = 3.14159

# Embora o Python permita alterar (ex: TAXA_IMPOSTO = 0.20), 
# a comunidade entende que variáveis MAIÚSCULAS não devem ser modificadas.

#Variaveis dos tipos logicos podem ser ultilizadas para armazenar o resultado de expressões de comparação

nota = 8 
media = 7

aprovado = nota >= media
print(aprovado)

# Composição em PYTHON
idade = 22
print("[%d]" % idade)
print("[%0d]" % idade)
print("[%3d]" % idade)
print("[%-3d]" % idade)
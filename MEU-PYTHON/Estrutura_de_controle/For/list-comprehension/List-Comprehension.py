# Regra de ouro: Se tem apenas if (sem else), ele funciona como filtro e vai sempre no final.

valores = [10, 5, 20, 3, 15]
# Apenas valores maiores que 10:
maiores = [v for v in valores if v > 10]  # [20, 15]

# 💡 Regra de ouro: Se tem if e else, é uma transformação de valor e vai no início (antes do for)

notas = [4.5, 8.0, 6.0, 3.0]
# Rótulo para cada nota:
resultado = ["Aprovado" if n >= 6.0 else "Reprovado" for n in notas]
# Saída: ['Reprovado', 'Aprovado', 'Aprovado', 'Reprovado']

# Podemos aplicar métodos como .strip(), .upper(), .lower() ou conversões de tipo diretamente na expressão de saída:

nomes_brutos = ["  ana  ", " CARLOS ", "maria  "]
nomes_limpos = [nome.strip().title() for nome in nomes_brutos]
# Saída: ['Ana', 'Carlos', 'Maria']

# Quando temos uma lista de listas (matriz) e queremos transformar tudo em uma lista simples (achatada):

matriz = [[1, 2], [3, 4]]
# A ordem dos 'for' é exatamente a mesma da estrutura tradicional:
achatada = [item for linha in matriz for item in linha]
# Saída: [1, 2, 3, 4]
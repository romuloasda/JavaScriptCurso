# String base para os testes
texto = "  User-4782_BR  "
codigo = "USR-9482-BR"

print("--- 1. VERIFICAÇÃO E VALIDAÇÃO ---")
print(codigo.startswith("USR"))       # True (começa com USR)
print(codigo.endswith("BR"))          # True (termina com BR)
print(codigo.isalnum())               # False (contém hífens)
print("Python3".isalnum())            # True (letras e números apenas)
print("ApenasLetras".isalpha())       # True (só letras)
print("12345".isdigit())              # True (só dígitos)
print("12345".isnumeric())            # True (numérico)
print("12345".isdecimal())            # True (decimal)
print("Hello".isascii())              # True (caracteres ASCII)
print("nome_variavel".isidentifier()) # True (nome de variável válido)
print("texto".islower())              # True (tudo minúsculo)
print("TEXTO".isupper())              # True (tudo maiúsculo)
print("Titulo Principal".istitle())   # True (iniciais maiúsculas)
print("   \n\t".isspace())            # True (apenas espaços/quebras)
print("Texto comum".isprintable())    # True (pode ser exibido)


print("\n--- 2. MODIFICAÇÃO DE CAIXA ---")
print(codigo.lower())                 # usr-9482-br
print(codigo.upper())                 # USR-9482-BR
print("o gato sumiu".capitalize())    # O gato sumiu
print("o gato sumiu".title())         # O Gato Sumiu
print("PyThOn".swapcase())            # pYtHoN (inverte a caixa)
print("ß".casefold())                 # ss (remoção de caixa agressiva alemã)


print("\n--- 3. BUSCA, CONTAGEM E POSIÇÃO ---")
print(codigo.find("9482"))            # 4 (índice inicial)
print(codigo.find("XPTO"))            # -1 (não encontrado)
print(codigo.rfind("BR"))             # 9 (último índice onde começa BR)
print(codigo.index("9482"))           # 4 (igual find, mas dá erro se não achar)
print(codigo.rindex("BR"))            # 9 (último índice, dá erro se não achar)
print(codigo.count("-"))              # 2 (ocorrências de hífens)


print("\n--- 4. DIVISÃO E JUNÇÃO ---")
print(codigo.split("-"))              # ['USR', '9482', 'BR']
print(codigo.rsplit("-", 1))          # ['USR-9482', 'BR'] (divide 1x da direita)
print("Linha1\nLinha2".splitlines())  # ['Linha1', 'Linha2']
print("-".join(["ABC", "123"]))        # ABC-123 (junta a lista)
print(codigo.partition("-"))          # ('USR', '-', '9482-BR')
print(codigo.rpartition("-"))         # ('USR-9482', '-', 'BR')


print("\n--- 5. LIMPEZA E PREENCHIMENTO ---")
print(texto.strip())                  # "User-4782_BR" (remove ambos os lados)
print(texto.lstrip())                 # "User-4782_BR  " (remove esquerda)
print(texto.rstrip())                 # "  User-4782_BR" (remove direita)
print("Menu".center(10, "-"))         # ---Menu--- (centraliza em 10 espaços)
print("Item".ljust(10, "."))          # Item...... (alinha à esquerda)
print("Preço".rjust(10, "."))         # .....Preço (alinha à direita)
print("45".zfill(5))                  # 00045 (preenche com zeros à esquerda)
print("A\tB".expandtabs(4))           # "A   B" (substitui \t por 4 espaços)


print("\n--- 6. SUBSTITUIÇÃO E TRADUÇÃO ---")
print(codigo.replace("BR", "US"))     # USR-9482-US

# maketrans + translate servem para trocar múltiplos caracteres de uma vez
tabela = str.maketrans("aeiou", "43105")
print("texto exemplo".translate(tabela)) # t3xt0 3x3mpl0


print("\n--- 7. FORMATAÇÃO E CODIFICAÇÃO ---")
print("ID: {}, Tipo: {}".format(12, "Adm")) # ID: 12, Tipo: Adm
print("ID: {id}".format_map({'id': 99}))    # ID: 99
print("Café".encode("utf-8"))               # b'Caf\xc3\xa9' (converte para bytes)

# Métodos que faltaram (Adicionados no Python 3.9+)
arquivo = "relatorio_final.pdf"

print("--- MÉTODOS QUE FALTAVAM ---")
print(arquivo.removeprefix("relatorio_"))  # Retorna: final.pdf
print(arquivo.removesuffix(".pdf"))         # Retorna: relatorio_final

# Se o prefixo/sufixo não existir, eles simplesmente retornam a string original sem erro:
print(arquivo.removeprefix("texto_errado_")) # Retorna: relatorio_final.pdf


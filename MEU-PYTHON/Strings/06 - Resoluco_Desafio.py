entradas = [
    "  +55 (11) 98765-4321  ",
    "11987654321",
    "+55.11.98765.4321",
    "  (11) 9 8765-4321 "
]

telefones_limpos = []
telefones_formatados = []

for entrada in entradas:
    # 1. Limpeza: Mantém apenas os dígitos números
    limpo = "".join([char for char in entrada if char.isdigit()])
    
    # 2. Garante o código do país '55'
    if not limpo.startswith("55"):
        limpo = "55" + limpo
        
    telefones_limpos.append(limpo)
    
    # 3. Formatação usando Fatiamento (Slicing) + f-string
    formatado = f"+{limpo[0:2]} ({limpo[2:4]}) {limpo[4:9]}-{limpo[9:]}"
    telefones_formatados.append(formatado)

# Exibindo os resultados
print("--- Números Limpos (Apenas dígitos) ---")
print(telefones_limpos)
print(formatado)

print("\n--- Números Formatados ---")
for num in telefones_formatados:
    print(num)
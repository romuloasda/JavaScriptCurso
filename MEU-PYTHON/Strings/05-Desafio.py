log_bruto = "  NOME: carlos silva | STATUS: ativo | ID: 00482  "

# log_bruto = log_bruto[2:6] + log_bruto[7:20].upper() + log_bruto[20:31] + log_bruto[31:37].upper() + log_bruto[38:43] + "".join(reversed(log_bruto[43:48])).strip()


nome = log_bruto[7:20].upper().strip()

id_invertido = "".join(reversed(log_bruto[43:48])).strip()

status = log_bruto[31:37].upper()

texto_completo = f"O usuario {nome} (ID Invertido {id_invertido}) está com o status {status}"


print(texto_completo)

entradas = [
    "  +55 (11) 98765-4321  ",
    "11987654321",
    "+55.11.98765.4321",
    "  (11) 9 8765-4321 "
]

for entrada in entradas:
		entrada = entrada.replace(" ", "").replace("+", "").replace("(", "").replace(")", "").replace(".", "").replace("-", "")
		if not entrada.startswith("55"):
			entrada = "55" + entrada
		print(entrada)

# Filtra mantendo apenas os caracteres que são números
apenas_numeros = "".join([c for c in entrada if c.isdigit()])
print(f"Apenas numeros {apenas_numeros}")

		
		
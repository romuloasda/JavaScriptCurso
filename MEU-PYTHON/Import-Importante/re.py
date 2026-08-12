import re
# Busca todos os números do texto e pega o primeiro encontrado
primeiro_numero = re.findall(r'\d+', "Idade: 25, Ano: 1999")[0] # Retorna "25"

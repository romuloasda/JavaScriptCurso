from datetime import datetime

# Sem parametro e com retorno

def horaCerta():
	agora = datetime.now()
	return f"{agora.hour:02d}:{agora.minute:02d}:{agora.second:02d}"


hora = horaCerta()
print(hora)
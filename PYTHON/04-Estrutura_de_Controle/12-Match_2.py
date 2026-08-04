nome = "Romulo Araujo "

partes_nome = nome.split()

match partes_nome:
	case [primeiro]:
		sigla = primeiro[0:2]

	case [primeiro, segundo]:
		sigla = primeiro[0] + segundo[0]

	case [primeiro, *m, ultimo]:
		sigla = primeiro[0] + ultimo[0]

	case _:
		sigla = "AL"

print(f"A sigla do usuario é {sigla.upper()}")
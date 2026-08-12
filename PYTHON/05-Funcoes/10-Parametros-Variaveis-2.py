import secrets
from datetime import datetime


def criarUsuario(**atributo):
	novo_usuario = {
		"senha": secrets.token_urlsafe(20),
		"data_criacao": datetime.now(),
		"ativo": True,
	}

	novo_usuario.update(atributo)
	return novo_usuario


novo_usuario = criarUsuario(
	nome='Mario do Peixe',
	email='fsdfsdf@gmail.com',
	senha='123456'
)

print(novo_usuario)
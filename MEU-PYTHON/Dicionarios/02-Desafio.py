produto = {'item': 'Notebook', 'preco': 3500.0 }
print(produto['item'])

aluno = {'nome': 'Ana', 'nota': 7.5}
aluno['nota'] = 9.0
aluno['curso'] = 'Python'
print(aluno)

servidor = {"host": "192.168.0.1", "porta": 8080, "status": "online"}
porta_removida = servidor.pop('porta')
print(porta_removida, '\n', servidor)

config = {"ip": "127.0.0.1", "porta": 3000}

tempo_limite = config.get('timeout', 30)
print(tempo_limite)

estoque = {"mouses": 15, "teclados": 8, "monitores": 4}
nomes_itens = list(estoque.keys())
print(nomes_itens)

total_unidades = sum(estoque.values())
print(nomes_itens, total_unidades)

total_precos = 0.0
precos = {"arroz": 25.0, "feijao": 9.5, "cafe": 18.0}
for chave, valor in precos.items():
	print(f"{chave} R$ {valor}")
	total_precos += valor
print(f'Preço total R$: {total_precos}')

servico = {"nome": "API Auth", "status": "offline"}
servico.update({'status': 'Online', 'porta': 500})
print(servico)

configuracoes = {"tema": "escuro"}
configuracoes.setdefault("tema", "claro")
configuracoes.setdefault('resolucao', '1920x1080')
print(configuracoes)

cache = {"token": "xyz123", "tempo": 60}
token_valido = ''
if 'token' in cache:
	token_valido = cache["token"]

cache.clear()
print(cache, token_valido)

catalogo = {
    "mouse": 80.0,
    "teclado": 150.0,
    "monitor": 900.0,
    "fone": 200.0
}

sessao_usuario = {
    "usuario": "admin_root",
    "ip": "192.168.1.100",
    "nivel": "super"
}

preco_removivel = catalogo.pop('fone')
catalogo.setdefault('frete_gratis', True)
catalogo.update({'monitor': 850.0, 'mousepad': 45.0})
print(catalogo)

total_catalogo = sum(catalogo.values())

# total_catalogo = sum(v for v in catalogo.values() if isinstance(v, (int, float)) and not isinstance(v, bool))

# # Ou filtrando explicitamente apenas floats/ints:
# total_catalogo = sum(v for v in catalogo.values() if type(v) in (int, float))

print(total_catalogo)

tempo_expiracao = sessao_usuario.get('timeout', 60)

if 'usuario' in sessao_usuario:
	sessao_valida = True
else:
	sessao_valida = False

sessao_usuario.clear()

for chave,valor in catalogo.items():
	print(f'{chave.capitalize()} | Valor: {valor}')

print(preco_removivel, total_catalogo, tempo_expiracao, sessao_valida, sessao_usuario)


import copy

empresa = {
    "ti": {"responsavel": "Carlos", "ramal": 402},
    "rh": {"responsavel": "Beatriz", "ramal": 105}
}

ramal_ti = empresa["ti"]["ramal"]
print(ramal_ti)

original = {"cfg": {"modo": "debug"}}
clone = copy.deepcopy(original)
clone["cfg"]["modo"] = "producao"
print(original)
print(clone)

pontuacoes = {"Ana": 95, "Bruno": 60, "Caio": 82, "Duda": 45}
aprovados = {chave: v for chave, v in pontuacoes.items() if v > 70}
print(aprovados)

usuarios = ["admin", "root", "gestor"]

permissoes = dict.fromkeys(usuarios, "leitura")
print(permissoes)

base = {"host": "localhost", "porta": 80}
override = {"porta": 8080, "ssl": True}

config_ativa = base | override
print(config_ativa)

siglas = {"SP": "Sao Paulo", "RJ": "Rio de Janeiro", "MG": "Minas Gerais"}
estados_para_siglas = {valor: chave for chave, valor in siglas.items()}
print(estados_para_siglas)

nos = ["node_alpha", "node_beta", "node_gamma"]
status_nos = dict.fromkeys(nos, "STANDBY")
print(status_nos)

servicos = {
    "auth": {"porta": 4000, "status": "online", "tentativas": 3},
    "pagamento": {"porta": 5000, "status": "offline", "tentativas": 0},
    "notificacao": {"porta": 6000, "status": "online", "tentativas": 12},
    "relatorios": {"porta": 7000, "status": "offline", "tentativas": 5}
}

ambiente_homologacao = copy.deepcopy(servicos)
ambiente_homologacao["pagamento"]["status"] = "online" 
ambiente_homologacao["pagamento"]["tentativas"] = 1 
print(ambiente_homologacao)

ajustes_producao = {"auth": {"porta": 4443, "status": "online", "tentativas": 0}}
servicos_atualizados = servicos | ajustes_producao
print(servicos_atualizados)

servicos_ativos = {chave: v for chave, v in servicos.items() if v["status"] == "online"}
print(servicos_ativos)
rotas = {"srv_auth": 4000, "srv_pag": 5000, "srv_notif": 6000}
portas_para_rotas = {chave: v for v, chave in rotas.items()}
print(portas_para_rotas)

print(servicos["pagamento"], "\n", ambiente_homologacao["pagamento"])

for servi, val in servicos_ativos.items():
	print(f"Serviço Ativo: {servi.capitalize()} - Porta: {val["porta"]}")
	
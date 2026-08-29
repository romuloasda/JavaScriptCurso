usuario = {'nome': 'carlos', 'idade': 28, 'cargo': 'DEV', 'funcao': 'Front-Enzo'}
print(usuario['nome'], usuario['idade'], usuario['cargo'])

# Remoção Del, Pop:
del usuario['funcao']
print(usuario)

usuario.pop('cargo')
print(usuario)

# Adição e Modificação:
usuario['cargo'] = 'Front'
print(usuario)
usuario['cargo'] = 'DEV'
print(usuario)

# Aula: Métodos de Consulta Segura e Iteração

# Consulta Segura com .get(): Evita erros KeyError. Se a chave não existir, retorna None ou um valor padrão customizado: dicionario.get("chave", valor_padrao).

# .keys(): Retorna uma visão com todas as chaves.

# .values(): Retorna uma visão com todos os valores.

# .items(): Retorna pares (chave, valor), ideal para desempacotar em laços for.

usuario2 = {"nome": "Lucas", "pontos": 120}

# Consulta segura sem quebrar o script 
cargo = usuario2.get('cargo', 'Visitante')
print(cargo)

for chave, valor in usuario2.items():
	print(f'{chave} -> {valor}')

# Métodos de Atualização, Defesa e Limpeza.update(outro_dict): 
 
# Mescla outro dicionário ou insere múltiplos pares de uma vez. Se a chave já existir, o valor é atualizado; se não existir, a chave é criada.

# .setdefault(chave, valor_padrao): Retorna o valor da chave se ela existir. Se a chave não existir, insere-a com o valor informado e retorna esse valor.

# in / not in: Verifica se uma chave existe no dicionário em tempo constante $O(1)$..clear(): Esvazia completamente o dicionário diretamente na memória.

perfil = {"user": "ana_dev", "nivel": 1}

# Mesclando novos dados
perfil.update({"nivel": 2, "xp": 450})

# Inserção defensiva (só cria se não existir)
perfil.setdefault("status", "ativo")
perfil.setdefault("status", "offline") # Mantém 'ativo'

# Checagem de chave
if "xp" in perfil:
    print(perfil["xp"])

# Aula: Dicionários Aninhados e Transformações Avançadas

# Dicionários Aninhados: Um dicionário pode conter outros dicionários como valores, permitindo modelar estruturas de dados complexas (como registros de banco de dados e APIs).

# Acesso em Cadeia: banco["usuario_1"]["email"].

# Cópia Rasa (.copy()) vs Cópia Profunda (copy.deepcopy()): .copy() copia apenas o primeiro nível; estruturas aninhadas continuam compartilhando a mesma referência de memória. Para isolamento completo, usa-se copy.deepcopy().

# Dict Comprehensions Avançados: {chave: expressao for chave, valor in dicionario.items() if condicao}

import copy

banco_dados = {
    "usr_101": {"nome": "Lucas", "saldo": 250.0},
    "usr_102": {"nome": "Mariana", "saldo": 800.0}
}

# Acesso aninhado
print(banco_dados["usr_101"]["nome"])  # Lucas

# Dict Comprehension para filtrar usuários com saldo > 500
ricos = {k: v for k, v in banco_dados.items() if v["saldo"] > 500}

# Aula: Métodos Utilitários e Vistas Dinâmicas de Dicionários

# dict.fromkeys(iteravel, valor_padrao): Cria um novo dicionário a partir de uma sequência de chaves, associando a todas elas o mesmo valor inicial (padrão é None).

# Operador de União (| e |= a partir do Python 3.9):

# a | b: Retorna um novo dicionário combinando ambos (chaves de b sobrescrevem a).

# a |= b: Atualiza a in-place com os pares de b (equivalente ao .update()).

# Inversão de Dicionário: Técnica clássica via Dict Comprehension para inverter chaves e valores: {v: k for k, v in d.items()}.

# Criando dicionário com valores padrão
chaves = ["servidor_1", "servidor_2", "servidor_3"]
status_servidores = dict.fromkeys(chaves, "offline")

# União com operador |
padrao = {"porta": 8080, "debug": True}
customizado = {"debug": False, "env": "prod"}
config_final = padrao | customizado  # {'porta': 8080, 'debug': False, 'env': 'prod'}

# Inversão de chaves e valores
codigos = {"BR": 55, "US": 1}
codigos_invertidos = {valor: chave for chave, valor in codigos.items()} # {55: 'BR', 1: 'US'}


letras = ["A", "B", "C", "D", "E"]

del letras[1:3]
print(letras)

l1 = [1, 2, 3] 
l2 = [1, 2, 3]

sao_iguais = l1 == l2
nao_tem_5 = 5 not in l1
print(sao_iguais,nao_tem_5)

import copy

base = [["X", "Y"], [1, 2]]
base_clonada = copy.deepcopy(base)
base_clonada[0][0] = "ALTERANDO"
print(base,base_clonada)


logs_servidor = [["USR-1", "LOGIN_OK"], ["USR-2", "FALHA_SENHA"], ["USR-3", "ACESSO_NEGADO"], ["USR-4", "LOGIN_OK"]]

log_backup = copy.deepcopy(logs_servidor)

del logs_servidor[1:3]
logs_servidor[0][0] = "USR-ADMIN"

listas_iguais = logs_servidor == log_backup
registro_removido = logs_servidor[1] not in ["USR-2", "FALHA_SENHA"]
print(logs_servidor, log_backup, registro_removido)

nums = [1, 2, 3]
nums_ref = nums
nums_copia = nums.copy()
mesma_referencia = nums == nums_ref
mesmo_objeto_copia = id(nums) == id(nums_copia)
print(mesma_referencia, mesmo_objeto_copia)

buffer = ["dados", "cache", "temp"]
buffer.clear()
print(buffer, len(buffer))

clusters = [["10.0.0.1", "Ativo"], ["10.0.0.2", "Inativo"]]
cluster_encontrado = ["10.0.0.1", "Ativo"] in clusters
print(cluster_encontrado)

transacoes_originais = [["TX-100", 450.0], ["TX-200", 1200.0], ["TX-300", 80.0]]

transacoes_backup = transacoes_originais.copy()
transacoes_rasa = transacoes_backup.copy()
transacoes_originais[0][1] = 999.0
alteracao_backup =  ["TX-100", 999.0] in transacoes_backup
print(alteracao_backup,id(transacoes_originais), id(transacoes_rasa))

transacoes_originais.clear()
print(transacoes_originais, "\n", transacoes_rasa, "\n", transacoes_backup)
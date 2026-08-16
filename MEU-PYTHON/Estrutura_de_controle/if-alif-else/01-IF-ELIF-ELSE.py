nota = 8.5

if nota >= 9.0:
    print("Desempenho: Excelente! 🌟")
elif nota >= 7.0:
    print("Desempenho: Aprovado! ✅")
elif nota >= 5.0:
    print("Desempenho: Recuperação. ⚠️")
else:
    print("Desempenho: Reprovado. ❌")

idade = 20
# sintaxe: valor_se_verdadeiro if condicao else valor_se_falso
status = "Maior de idade" if idade >= 18 else "Menor de idade"

print(status)  # Saída: Maior de idade

tem_carteira = True
idade = 20
possui_carro = False

# Ambas precisam ser verdadeiras
if idade >= 18 and tem_carteira:
    print("Pode dirigir legalmente.")

# Pelo menos uma precisa ser verdadeira
if tem_carteira or possui_carro:
    print("Possui requisitos básicos de transporte.")

permissao = "editor"
papeis_permitidos = ["admin", "gerente", "editor"]

# Forma elegante de testar pertencimento
if permissao in papeis_permitidos:
    print("Acesso concedido às configurações.")
else:
    print("Acesso restrito.")


comando = "reiniciar"

match comando:
    case "iniciar":
        print("Iniciando serviço...")
    case "parar":
        print("Parando serviço...")
    case "reiniciar":
        print("Reiniciando serviço...")
    case _:
        # O '_' funciona exatamente como o 'else'
        print("Comando desconhecido.")


usuarios_bloqueados = ["admin", "root", "guest"]
usuario_tentando_acesso = "carlos"

for usuario in usuarios_bloqueados:
    if usuario == usuario_tentando_acesso:
        print("⚠️ Usuário bloqueado encontrado! Acesso negado.")
        break # Interrompe o laço
else:
    # Este 'else' pertence ao 'for'! Só roda se o laço percorrer TUDO sem dar 'break'
    print("✅ Usuário liberado para acesso.")
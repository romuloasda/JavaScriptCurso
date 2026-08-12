usuarios = [
    {"email": "  CARLOS.SILVA@EMAIL.COM  ", "senha": "Senha123"},
    {"email": "ana_dev@empresa.com.br", "senha": "curta"},
    {"email": "joao.pedro@gmail.com", "senha": "sem_numeros_aqui"}
]

for usuario in usuarios:
    # 1. Limpeza e separação do e-mail
    email = usuario["email"].strip().lower()
    nome, dominio = email.split("@")
    
    # 2. Mascaramento
    email_mascarado = f"{nome[0]}***{nome[-1]}@{dominio}"
    
    # 3. Validação da senha
    senha = usuario["senha"]
    senha_valida = len(senha) >= 8 and any(c.isdigit() for c in senha)
    
    # 4. Exibição
    if senha_valida:
        print(f"✅ [{email_mascarado}] -> E-mail mascarado e Senha VÁLIDA!")
    else:
        print(f"❌ [{email_mascarado}] -> Senha INVÁLIDA (recomenda-se 8+ caracteres e números).")
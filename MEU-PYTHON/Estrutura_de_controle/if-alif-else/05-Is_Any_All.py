# Muitos desenvolvedores confundem esses dois operadores ao montar condicionais:

# == (Igualdade): Verifica se os valores/conteúdos são iguais.


# is (Identidade): Verifica se duas variáveis apontam para o mesmo endereço na memória.


# Regra de Ouro: Use is ou is not principalmente para testar None, True e False. Para strings, listas e números, use == ou !=.

# Em vez de escrever expressões longas como if cond1 and cond2 and cond3: ou if cond1 or cond2 or cond3:, o Python oferece funções embutidas para coleções booleanas:


# all(lista): Retorna True se TODOS os elementos forem verdadeiros (equivalente a uma série de and).


# any(lista): Retorna True se PELO MENOS UM elemento for verdadeiro (equivalente a uma série de or).

documentos_enviados = [True, True, True]
tem_pendencia = [False, False, True]

if all(documentos_enviados):
    print("✅ Todos os documentos foram anexados com sucesso.")

if any(tem_pendencia):
    print("⚠️ Atenção: Há pelo menos uma pendência cadastral.")
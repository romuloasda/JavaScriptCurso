import sys

# Se executar no terminal: python script.py Maria 30
# sys.argv[0] é sempre o nome do arquivo executado ('script.py')
# sys.argv[1] será "Maria"
# sys.argv[2] será "30"

if len(sys.argv) > 1:
    nome_script = sys.argv[0]
    primeiro_argumento = sys.argv[1]
    print(f"Executando {nome_script} com o parâmetro: {primeiro_argumento}")
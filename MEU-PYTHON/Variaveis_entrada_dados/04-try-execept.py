# Capturando erros de entrada com segurança
entrada = input("Digite o valor da sua temperatura: ")

try:
    # O Python tenta converter para float
    temperatura = float(entrada)
    print(f"Temperatura registrada: {temperatura:.1f}°C")
except ValueError:
    # Se o usuário digitou algo inválido (ex: "trinta"), o programa entra aqui em vez de quebrar
    print("❌ Entrada inválida! Por favor, digite um número numérico válido.")
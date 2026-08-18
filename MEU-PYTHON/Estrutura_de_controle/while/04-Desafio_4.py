import time

# 1. Configurações Iniciais
temperatura_cpu = 40.0
requisicoes_ativas = 10
ciclos_executados = 0

print("=== INICIANDO MONITORAMENTO DO SERVIDOR (Pressione Ctrl+C para parar) ===")

# 2. Proteção Global contra Ctrl + C
try:
    # 3. Laço com Múltiplas Condições no Cabeçalho
    while temperatura_cpu < 80.0 and requisicoes_ativas > 0:
        ciclos_executados += 1
        temperatura_cpu += 10.0
        requisicoes_ativas -= 2

        print(f"[Ciclo {ciclos_executados}] Temperatura: {temperatura_cpu:.1f}°C | Requisições restantes: {requisicoes_ativas}")
        
        # Pausa de 1 segundo para simular intervalo de leitura
        time.sleep(1)

    # 4. Diagnóstico Final (executado após a saída natural do laço)
    print("\n--- DIAGNÓSTICO DO SISTEMA ---")
    if temperatura_cpu >= 80.0:
        print("⚠️ ALERTA CRÍTICO: Servidor desligado por superaquecimento!")
    else:
        print("✅ Processamento concluído com sucesso: Fila de requisições zerada!")

except KeyboardInterrupt:
    print("\n🛑 Monitoramento encerrado manualmente pelo operador de infraestrutura.")
	
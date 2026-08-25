tarefas = ["Estudar", "Descansar"]
tarefas.insert(1,"Almoçar")
tarefas.extend(["Treinar", "Dormir"])
print(tarefas)

fila = ["VIP-1", "Comum-1", "VIP-2", "Comum-2"]
atendido = fila.pop(0)
fila.remove("Comum-1")
print(atendido, fila)

valores = [50, 10, 50, 30, 20]
valores.sort()
total_50 = valores.count(50)
print(total_50, valores)

pacientes = ["Carlos", "Ana", "Beatriz", "Daniel", "Eduarda"]

pacientes.insert(0,"URGENTE-Marcos")
proximo_atendido = pacientes.pop(0)
pacientes.remove("Daniel")
pacientes_ordenados = pacientes.copy()
pacientes_ordenados.sort()
print(proximo_atendido)
print(pacientes)
print(pacientes_ordenados)
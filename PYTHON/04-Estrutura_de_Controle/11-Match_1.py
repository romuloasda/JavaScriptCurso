n1 = int(input("Informe o primeiro numero: "))
n2 = int(input("Informe o segundo numero: "))
op = input("Infome a operação: [+ - * /]")

match op:
	case "+":
		resultado = n1 + n2
	case "-":
		resultado = n1 - n2
	case "*":
		resultado = n1 * n2
	case "/":
		resultado = n1 / n2
	case _:
		print("Operação não encontrada")

print(f"O resultado é {resultado}")
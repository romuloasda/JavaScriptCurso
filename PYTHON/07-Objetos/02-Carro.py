class Carro:
	def __init__(self, marca, modelo, velocidade=0):
		self.marca= marca
		self.modelo = modelo
		self.velocidade = velocidade


	def acelerar(self):
		self.velocidade += 10

	def frear(self):
		self.velocidade -= 5

	def buzinar(self, qtd=1):
		for i in range(qtd):
			print(f"{self.marca} {self.modelo} => Biiiiiiiiiiiiiii")


c1 = Carro("Tesla", "Modelo S")
c1.acelerar()
c1.buzinar(4)
c1.frear()
print(c1.marca, c1.modelo, c1.velocidade)

c2 = Carro("Fiat", "Argo")
print(c2.marca, c2.modelo)
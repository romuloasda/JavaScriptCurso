class Carro:
	def dirigir(self):
		return "Você está dirigindo."

class Barco:
	def navegar(self):
		return "Voce esta navegando."

class Aviao:
	def voar(self):
		return "Voce esta voando."

class CarroAnf(Carro, Barco, Aviao):
	pass

ai = CarroAnf()

print(ai.dirigir(), ai.navegar(), ai.voar())


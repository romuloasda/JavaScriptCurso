class Areas:
	PI = 3.14

	@staticmethod
	def circulo(raio):
		return Areas.PI * raio ** 2

	@staticmethod
	def triangulo(base, altura):
		return (base * altura) / 2

	def quadrado(base, altura):
		return base * altura

	@classmethod
	def alterar_pi(cls, novo_pi):
		cls.PI = novo_pi

print(Areas.PI)
print(Areas.circulo(2.5))
print(Areas.triangulo(6, 10))
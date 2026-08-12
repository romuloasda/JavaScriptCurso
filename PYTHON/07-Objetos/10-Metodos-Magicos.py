class Calculadora:
	def __init__(self, valor_inicial=0):
		self.__valor = valor_inicial

	def somar(self, valor):
		self.__valor += valor
		return self #retornar o self faz com que possa escrever tudo com notação ponto

	def subtrair(self, valor):
		self.__valor -= valor
		return self

	def multiplicar(self, valor):
		self.__valor *= valor
		return self

	def dividir(self, valor):
		self.__valor /= valor
		return self

	@property
	def valor(self):
		return self.__valor

	#metodo Mágico
	def __add__(self, outra_calc):
		return Calculadora(self.__valor + outra_calc)

	def __str__(self) -> str:
		return f"A calculadora tem valor em memoria de {self.__valor}"
class Funcionario:
	def __init__(self, salario):
		self.__salario = salario
		

	#  GETTER
	def get_salario(self):
		return self.__salario

	def set_salario(self, novo):
		self.salario = novo

	@property
	def salario(self):
		return self.__salario

	@salario.setter
	def salario(self, novo_salario):
		if novo_salario <= 1300:
			raise ValueError(
				"O salario não pode ser meno que 1300"
			)
		self.__salario = novo_salario

func = Funcionario(1999)
func.__salario = 1299
print(func.get_salario())
print(func.salario)
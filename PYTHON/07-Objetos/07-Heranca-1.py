class Animal:

	def __init__(self, nome):
		self.nome = nome
		pass

	def expressar(self):
		return f'O {self.nome} animal esta fazendo o SOM'


class Cachorro(Animal):
	def __init__(self, nome):
		super().__init__(nome)

	def expressar(self):
		return f"{super().expressar()}... AU AU AU..."



ai = Animal('anmal')
print(ai.expressar())

ai = Cachorro('Rex')
print(ai.expressar())
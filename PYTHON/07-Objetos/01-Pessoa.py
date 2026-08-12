class Pessoa:
	def __init__(self, nome, idade):
		self.nome = nome
		self.idade = idade


p1 = Pessoa("Kako", 33)
p1.nome = "Marcos"


p2 = Pessoa("Kaka", 21)
print(p1.nome, p1.idade, p2.nome, p2.idade)
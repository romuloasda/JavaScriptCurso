from abc import ABC, abstractmethod


class Atendente(ABC):
	@abstractmethod
	def saudacao(self):
		pass

class AtendentePt(Atendente):
	def saudacao(self):
		return "Bom Dia"

class AtendenteIg(Atendente):
	def saudacao(self):
		return "Good Mornig"


ai = Atendente()
print(ai)
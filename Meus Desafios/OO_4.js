class MagoSuporte {
	constructor(nome) {
		this.nome = nome
		this.mana = 100
	}

	statusMana = (alvo) => {
		if (alvo.vida >= 100) {
			alvo.vida = 100
			console.log('Vida Maxima')
			return
		}

		if (this.mana < 20) {
			console.log('Sem Mana')
			return;
		}

		if (this.mana >= 20) {
			this.mana -= 20
			alvo.vida += 30
			console.log(`${alvo.nome} +${alvo.vida}`)
			return;
		}

	}
}

class Aliado {
	constructor(nome) {
		this.nome = nome
		this.vida = 40
	}

}

const suporte1 = new MagoSuporte('healer')
const aliado1 = new Aliado('Guerreiro')

suporte1.statusMana(aliado1)
suporte1.statusMana(aliado1)
suporte1.statusMana(aliado1)
console.log(aliado1.vida)
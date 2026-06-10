const gamer = { nickname: 'DeusDoTruco', lvl: 50 }
console.log(gamer.nickname)

const carro = {
	modelo: 'Sandero',
	motor: {
		potencia: 1.6,
		combustivel: 'Flex',
	},
}

console.log(carro.motor.potencia, carro.motor.combustivel)

const dog = {
	nome: 'Lucket',
	raça: 'Caramelo',

	latir() {
		return `O cachorro ${this.nome} da raça ${this.raça} esta latindo`
	}
}

console.log(dog.latir())
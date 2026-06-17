const gamer = { nickname: 'DeusDoTruco', lvl: 50 }
gamer.lvl = 55
console.log(gamer)

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

const gamer = { nickname: 'DeusDoTruco', lvl: 50 }
gamer.lvl = 55
delete gamer.nickname

console.log(gamer)

const smartphone = { marca: 'Samsung', modelo: 's24', arm: '256GB' }
console.log(smartphone.arm)

for (let phone in smartphone) {
	console.log(phone + smartphone[phone])
}





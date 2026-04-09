// Cadeia de protótipos
Object.prototype.attr0 = '0'
const avo = { attrA: 'A' }
const pai = { attrB: 'B', __proto__: avo }
const filho = { attrC: 'C', __proto__: pai }
console.log(filho.attrA, filho.attrB, filho.attrC, filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta
		} else {
			this.velAtual += this.velMax
		}
    },
	status() {
		return `${this.velAtual}Km/h ${this.velMax}Km/h`
	}
}

const ferrari = {
	modelo: 'f40',
	velMax: 324 // shadowing
}

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`
	}
}

Object.setPrototypeOF(ferrari, carro)
Object.setPrototypeOF(volvo, carro)

console.log(volvo)


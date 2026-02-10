// Cadeia de protótipos
Object.prototype.attr0 = '0'
const avo = { attrA: 'A' }
const pai = { attrB: 'B', __proto__: avo }
const filho = { attrC: 'C', __proto__: pai }
console.log(filho.attrA, filho.attrB, filho.attrC, filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        this.velAtual += delta
    }
}




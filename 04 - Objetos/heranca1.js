const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function carro(modelo, velMax) {
    this.modelo = modelo
    this.velMax = velMax
}

const uno = new carro('Uno', 200)
const palio = new carro('Palio', 200)

console.log(uno.__proto__ === carro.prototype)
console.log(palio.__proto__ === carro.prototype)
console.log(carro.prototype.__proto__ === Object.prototype)

console.log(carro.prototype)

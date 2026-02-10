// Getters é um método que pega um valor
// Setters é um método que define um valor


const sequencia = {
    _valor: 1,
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor)

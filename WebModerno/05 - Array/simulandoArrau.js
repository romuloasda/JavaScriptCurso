const quaseArray = { 0: 'Rafael', 1: 'Bia', 2: 'Daniel', 3: 'Ana' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray.toString())

const meuArray = ['Rafael', 'Bia', 'Daniel', 'Ana']
console.log(meuArray)

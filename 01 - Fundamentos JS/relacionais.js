console.log('01)', '1' == 1) // igual
console.log('02)', '1' === 1) // idêntico
console.log('03)', '1' != 1) // diferente
console.log('04)', '1' !== 1) // não idêntico

console.log('05)', 3 < 2) // menor que
console.log('06)', 3 > 2) // maior que
console.log('07)', 3 <= 2) // menor ou igual a
console.log('08)', 3 >= 2) // maior ou igual a

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2) // idêntico
console.log('10)', d1 == d2) // igual
console.log('11)', d1.getTime() === d2.getTime()) // idêntico

console.log('12)', undefined == null) // igual
console.log('13)', undefined === null) // idêntico

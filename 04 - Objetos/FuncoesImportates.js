const pessoa = {
    nome: 'romulo',
    idade: 25,
    peso: 85
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2000'
})

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign


const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3 }

Object.assign(dest, o1, o2)
console.log(dest)

const obj = Object.assign({}, o1, o2)
console.log(obj)

const obj2 = { ...o1, ...o2 }
console.log(obj2)

const pai = { nome: 'Pedro', corCor: 'preto' }
const filho = Object.create(pai)
filho.nome = 'Ana'
console.log(filho.nome)
console.log(filho.corCor)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(`${filha2.nome} ${filha2.corCor}`)
console.log(filha2.nome)
console.log(filha2.corCor)
console.log(Object.keys(filha2))
console.log(Object.values(filho))
console.log(Object.entries(filho))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Fora: ${key}`)
    consol
}
// array em js é um objeto


console.log(typeof [], typeof new Array, typeof [])

const aprovados = ['Ana', 'Bia', 'Carlos', 'Daniel']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])

aprovados[2] = 'Rau'
console.log(aprovados)

aprovados.push('Rei') //adiconar elementos no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1] //remover elementos do array
console.log(aprovados)

aprovados.pop() //remover elementos do array
console.log(aprovados)


console.log(aprovados.length) //tamanho do array

console.log(aprovados[1])

console.log(aprovados[1])

aprovados.splice(1, 1) //adicionar e remover elementos do array
console.log(aprovados)

aprovados.splice(1, 1, 'romulo') //remover elementos do array e adicionar elementos no array
console.log(aprovados)



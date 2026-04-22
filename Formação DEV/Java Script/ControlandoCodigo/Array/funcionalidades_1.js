const numeros = [0, 1, 2, 3, 4, 5]

//função vs metodo

numeros[0] = 100
numeros.push(6)


console.log(numeros.indexOf(4, 4))
console.log(numeros.includes(10, 1)) // INCLUDES diz se o numero ta true ou não false no array
console.log(numeros.join(' - '))
console.log(numeros)

const numeros2 = numeros.concat(7, 8, 9)
console.log(numeros2)
console.log(numeros)
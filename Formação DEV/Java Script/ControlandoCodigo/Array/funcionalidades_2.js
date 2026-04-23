const numeros = [0, 1, 2, 3, 4, 5]

//função vs metodo

const numeroExcluido = numeros.pop()
console.log(numeros, numeroExcluido)

numeros.splice(2, 1, 'x', 'y', 'z')
console.log(numeros)
numeros.splice(2, 3, 2)
console.log(numeros)

numeros.push(5)
console.log(numeros)

numeros.reverse()
console.log(numeros)

numeros.reverse()
console.log(numeros)
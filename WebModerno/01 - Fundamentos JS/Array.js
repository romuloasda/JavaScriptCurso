const alunos = ['joão', 'maria', 'pedro'] // array
const valores = [8.1, 9.2, 7.3, 6.4, 5.5] // array
console.log(alunos[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // tamanho do array

valores.push({ id: 3 }, false, null, 'texto', Infinity) // adiciona um elemento no final do array
console.log(valores)

console.log(valores.pop()) // remove o último elemento do array
delete valores[0] // remove o primeiro elemento do array
console.log(valores)

console.log(valores.shift()) // remove o primeiro elemento do array
console.log(valores)

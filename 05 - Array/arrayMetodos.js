const pilotos = ['Vettel', 'Alonso', 'Massa', 'Raikkonen']
pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Romulo') //adiciona o primeiro elemento do array
console.log(pilotos)

pilotos.push('Romulo') //adiciona o ultimo elemento do array
console.log(pilotos)

pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.splice(1, 1) //adiciona e remove elementos do array
console.log(pilotos)

pilotos.splice(1, 1, 'Romulo') //adiciona e remove elementos do array
console.log(pilotos)

pilotos.slice(1, 1) //retorna um novo array com os elementos do array
console.log(pilotos)

pilotos.slice(1, 1, 'Romulo') //retorna um novo array com os elementos do array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //retorna um novo array com os elementos do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 2) //retorna um novo array com os elementos do array
console.log(algunsPilotos2)

const algunsPilotos3 = pilotos.slice(1, 2, 'Romulo') //retorna um novo array com os elementos do array
console.log(algunsPilotos3)


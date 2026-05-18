let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! = negação !! = negação da negação

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // string vazia
console.log(!!' texto')
console.log(!![]) // array
console.log(!!{}) // objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // string vazia
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // || = ou
console.log(!!('' || null || 0 || ' texto'))

let nome = ''
console.log(nome || 'Desconhecido')



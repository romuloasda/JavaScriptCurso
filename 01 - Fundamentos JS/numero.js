const peso1 = 1.0
const peso2 = Number('2.0')

console.log(Number.isInteger(peso1)) //Number.isInteger verifica se é um numero inteiro
console.log(Number.isInteger(peso2))

const avaliacao = 9.871
const avaliacao2 = 6.871

const total = avaliacao * peso1 + avaliacao2 * peso2
const Media = total / (peso1 + peso2)



console.log(Media.toFixed(2)) //toFixed limita as casas decimais
console.log(Media.toString(2)) //tostring transforma em binario
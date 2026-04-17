const trabalho1 = true
const trabalho2 = true

const comprarTv50 = trabalho1 && trabalho2 // and
const comprarTv40 = trabalho1 != trabalho2 // xor
const tomarSorvete = trabalho1 || trabalho2 // or
// const ficarEmCasa = !trabalho1 && !trabalho2
const ficarEmCasa = !tomarSorvete

console.log('Vamos comprar a TV de 50"?', comprarTv50)
console.log('Vamos comprar a TV de 40"?', comprarTv40)
console.log('Vamos comprar sorverte ?', tomarSorvete)
console.log('Vamos ficar em casa ?', ficarEmCasa)
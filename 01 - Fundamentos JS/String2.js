const nome = 'Rômulo'
const concatenacao = 'bonito ' + nome + ' é legal'
const template =
    `Olá ${nome}!
    tudo bem?`
//template string é para quebrar linha
console.log(concatenacao, template)
//template string expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)


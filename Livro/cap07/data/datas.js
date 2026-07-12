const hoje = new Date()
const amanha = new Date()
const mes = new Date()
const dia = amanha.getDate()

amanha.setDate(dia + 1)
console.log(`Hoje ${hoje} | Amanhã ${amanha}`)


mes.setMonth()

console.log(mes)
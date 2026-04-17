const hora = 21
const saudacao = hora >= 12 ? 'Boa Tarde' : 'Bom Dia'

console.log(saudacao)

const saudacao2 = hora <= 11 ? 'Boa Dia' :  (hora <= 17 ? 'Boa tarde' : 'Boa noite')
console.log(saudacao2) 

console.log(true ? 'sim' : 'Não')
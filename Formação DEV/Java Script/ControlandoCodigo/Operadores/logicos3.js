const emBlack = false
const temEstoque = true
const temPerfilFuncionario = true
// const permiteDescontoMaximo = emBlack && temEstoque

const permiteDescontoMaximo = (emBlack && temEstoque) || temPerfilFuncionario

console.log('Permite desconto maximo', permiteDescontoMaximo)


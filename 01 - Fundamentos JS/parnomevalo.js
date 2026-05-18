//par nome / valor
const saudacao = 'Opa' // contexto lexico 1 que é global

function exec() {
    const saudacao = 'Epa' // contexto lexico 2
    return saudacao
}

console.log(saudacao)
console.log(exec())

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(cliente)
console.log(cliente.nome)
console.log(cliente.endereco.logradouro)
console.log(cliente.endereco.numero)

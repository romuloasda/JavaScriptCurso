//factory function simples

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa())
console.log(criarPessoa('Romulo', 'Silva'))

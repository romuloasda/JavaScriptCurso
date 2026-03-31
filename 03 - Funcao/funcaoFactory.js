//factory function simples
//Factory é uma função que retorna um objeto

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
    };
}

console.log(criarPessoa());
console.log(criarPessoa("Romulo", "Silva"));

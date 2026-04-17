function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Romulo', 'Silva')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => {
            console.log(`${nome} está falando`)
        }
    }
}

const p2 = criarPessoa('Romulo')
p2.falar()


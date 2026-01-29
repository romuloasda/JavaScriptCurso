class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando`)
    }
}

const p1 = new Pessoa('Romulo', 'Silva')
p1.falar()

const pessoa = nome => {
    return {
        falar() {
            console.log(`${nome} está falando`)
        }
    }
}

const p2 = pessoa('Romulo')
p2.falar()
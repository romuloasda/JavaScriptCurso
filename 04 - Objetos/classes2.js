class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao) {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome, profissao) {
        super(sobrenome, profissao)
    }
}

const avo = new Avo('Silva')
const pai = new Pai('Silva', 'Engenheiro')
const filho = new Filho('Silva', 'Engenheiro')

console.log(avo)
console.log(pai)
console.log(filho)
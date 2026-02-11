class Lancamento {
    constructor(descricao, valor) {
        this.descricao = descricao
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        return this.lancamentos
            .map(l => l.valor)
            .reduce((total, valor) => total + valor)
    }
}

const salario = new Lancamento('Salário', 4500)
const aluguel = new Lancamento('Aluguel', -1200)

const contas = new CicloFinanceiro(10, 2020)
contas.addLancamentos(salario, aluguel)
console.log(contas.sumario())

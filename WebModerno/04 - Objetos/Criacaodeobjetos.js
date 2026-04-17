const obj1 = {

}

console.log(obj1)


//Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcao construtora
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}
console.log(criarPessoa('Romulo', 'Silva', 25))

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//uma funcao famosa que retorna um objeto
const fromJSON = JSON.parse('{ "nome": "Romulo", "idade": 25 }')
console.log(fromJSON)

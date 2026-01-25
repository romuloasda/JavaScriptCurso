const prod = {} // objeto
prod.nome = 'Celular Ultra Mega'
prod.preco = 2999.99
prod['desconto legal'] = 0.40 // evitar atributos com espaço

console.log(prod)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

// atribuição via desestruturação
const { nome, preco, obj } = prod2
console.log(nome, preco, obj)
//json é uma forma de representar objetos

//array[]
//array.push() adicionar
// array.unshift() add ao inicio
//array.pop remover ultimo
// array.shift() remover primeiro
//delete array []
//array.length saber o tamanho

const array = [10, 20, 30, 20]

console.log(array)

array.push(50)

console.log(array[1])

let carros = ['Fusca', 'Gol', 'Palio'];

// Mudar o 'Gol' para 'Ferrari'
carros[1] = 'Ferrari'; 

// Onde está o 'Palio'?
let posicao = carros.indexOf('Palio'); // Retorna 2
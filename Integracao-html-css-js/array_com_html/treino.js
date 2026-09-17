const frutas = ['uva', 'sdfdsf', 'manga', 'ajsdfjhsdf', 'mm', 'pera']


const maior = frutas.find(e => e === 'manga')
const index = frutas.indexOf(maior)
console.log(maior) // achei o elemento no array
console.log(index)

frutas.splice(index, 1) //Não confundir com o slice que copia parte do array
console.log(frutas)



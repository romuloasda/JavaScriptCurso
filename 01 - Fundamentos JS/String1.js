const escola = 'Cod3r'
console.log(escola.charAt(4)) //charAt pega a letra de uma posicao
console.log(escola.charCodeAt(3)) //charCodeAt pega o codigo da tabela ASC
console.log(escola.indexOf('3')) //indexOf pega o indice de uma letra
console.log(escola.substring(1, 3)) //substring pega uma parte da string

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e')) //replace substitui uma letra

console.log('Ana, Maria, Pedro'.split(',')) //split divide uma string
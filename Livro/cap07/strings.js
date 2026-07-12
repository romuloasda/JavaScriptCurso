const cidade = "perola"


function numeroDaLetra(letra, numero) {
	const tamanho = letra.length
	const palavra = letra.charAt(numero - 1)
	return `A palavra ${letra} tem ${tamanho} letras a posição ${numero} é ${palavra}`
}

const conta = numeroDaLetra(cidade, 1)
console.log(conta)

const palavra = 'perola'
const tam = palavra.length

let inverso = palavra.charAt(tam - 1).toUpperCase()

for (let i = tam - 2; i >= 0; i--) {
	inverso += palavra.charAt(i).toLowerCase()
}

console.log(`Palavra ${palavra}\nInvertida ${inverso}`)

const palavraa = 'salada'
const copia1 = palavraa.substring(2)
console.log(copia1)

const copia2 = palavraa.substring(-1)
console.log(copia2)

const posicao1 = palavraa.indexOf('a')
console.log(posicao1)

const nome = 'Rogerio Sene Goleiro BOM'
const primeiroNome = nome.indexOf(' ')
const ultimoNome = nome.lastIndexOf(' ')
console.log(nome.substring(0, primeiroNome), nome.substring(ultimoNome))

// Converter string em elementos de vetor

const metodoSplit = 'Calabresa, queijo, pão, salada'
const vetor = metodoSplit.split(',')
console.log(vetor)

// Validação de senha com o metodo match()

const senha = '#SenhaA_123!'
const array = senha.match(/[A-Z]/g)
console.log(array)

const array2 = senha.match(/\W|_/g)
console.log(array2)

// Substituição de caracteres

const novaStrig = palavraa.replace('salada', 'verdura')
console.log(novaStrig)

const trocaTudo = palavraa.replace(/a/g, "o").toUpperCase()
console.log(trocaTudo)

let texto = 'Rota Do Matar'
const restirarEspacoBranco = texto.replace(/ /g, "")
console.log(restirarEspacoBranco)
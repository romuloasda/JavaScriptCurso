const primeiroElemento = array => array[0]
const primeiraLetra = texto => texto[0]

const promessa = new Promise(resolve => {
	resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
	.then(primeiroElemento)
	.then(console.log)

console.log('Fim')



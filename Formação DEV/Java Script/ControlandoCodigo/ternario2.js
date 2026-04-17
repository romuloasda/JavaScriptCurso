const x = 8
const y = 4

const operacao = '-' // + - * /

const resultado = 
	operacao === '+' ? x + y : 
		operacao === '-' ? x - y : 
			operacao === '*' ? x * y : x / y

console.log(resultado)
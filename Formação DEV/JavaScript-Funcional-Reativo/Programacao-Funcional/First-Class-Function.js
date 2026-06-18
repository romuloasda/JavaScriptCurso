// Diz-se que uma linguagem de programação possui
// funções de primeira classe é quando funções nessa
// linguagem são tratadas como qualquer outra variavel.

const x = 3
const y = function (x) {
	return `Esse é o texto ${x}`
}

console.log(x)
console.log(y('Olá'))
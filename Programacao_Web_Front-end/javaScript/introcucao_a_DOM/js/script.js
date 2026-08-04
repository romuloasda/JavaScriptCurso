let palavra = 'ALA'

let maius = palavra.split("").reverse().join("")

console.log(maius)

if (palavra.toLowerCase() === maius.toLowerCase) {
	console.log('As palavras são iguais')
} else {
	console.log('As palavranão são iguais')
}
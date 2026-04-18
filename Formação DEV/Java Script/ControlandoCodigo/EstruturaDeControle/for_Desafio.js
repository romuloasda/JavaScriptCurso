// [1-1] 	[1-2] 	[1-3] 	
// [2-1] 	[2-2] 	[2-3] 	
// [3-1] 	[3-2] 	[3-3]

let conteudo = ''

for (let lin = 1; lin <= 3; lin++) {
	for (let col = 1; col <= 3; col++) {
		conteudo += `[${lin}-${col}] \t`
	}
	conteudo += `\n`
}
console.log(conteudo)

// #
// ##
// ###
let linha = ''

for (let i = 1; i <= 6; i++) {
	linha += '#'
	console.log(linha)
}

// Sem numero

for (let linha = '#'; linha <= '######'; linha += "#") {
	console.log(linha)
}

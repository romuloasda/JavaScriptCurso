let cont = 0
const formatado = {}
const conte = "js python js rust js rust ruby"


const conte_objeto = ((frase, palavra) => {
	palavra = palavra.toLowerCase()
	frase = frase.toLowerCase()
	let qtd = frase.split(palavra).length - 1

	if (frase.includes(palavra)) {
		formatado[palavra] = qtd
	}

})

conte_objeto(conte, 'js')
conte_objeto(conte, 'Python')
conte_objeto(conte, 'rust')
conte_objeto(conte, 'ruby')
console.log(formatado)



const usuarios = [
	{ nome: "Lucas", nivel: "pleno" },
	{ nome: "Beatriz", nivel: "junior" },
	{ nome: "Ana", nivel: "pleno" },
	{ nome: "Marcos", nivel: "senior" },
	{ nome: "Carla", nivel: "junior" }
];


const usuarios_formatados = usuarios.map(({ nome, nivel }) => {
	return {
		pleno: [],
		junior: [],
		senior: []
	}
})
console.log(usuarios_formatados)

const usuariosFormatados = {
	pleno: [],
	senior: [],
	junior: [],
}

for ({ nome, nivel } of usuarios) {
	const nomeNivel = { nome, nivel }
	if (nivel === 'pleno') {
		usuariosFormatados.pleno = [...usuariosFormatados.pleno, nomeNivel]
	} else if (nivel === 'junior') {
		usuariosFormatados.junior = [...usuariosFormatados.junior, nomeNivel]
	} else if (nivel === 'senior') {
		usuariosFormatados.senior = [...usuariosFormatados.senior, nomeNivel]
	}
}

console.table(usuariosFormatados)

const usuariosFormatados2 = Object.groupBy(usuarios, ({ nivel }) => nivel);

console.table(usuariosFormatados2);






// Aluno faltou 18 vezes em um total de 223 aulas no ano
// Notas 5.8, 8.1, 6.9

// O aluno foi aprovado ?
// Média maior ou igual que 7 e frequencia de 80%

// Mostar a porcentagem de falta

const faltas = 18 
const totalAulas = 223
const frequencia = Math.round((1 - faltas / totalAulas) * 100)
console.log(frequencia.toFixed(2))

const frequenciaAprovacao = frequencia >= 7
console.log(frequencia) 

// Mostrar a Media do aluno
const notas1 = 5.8
const notas2 = 8.1
const notas3 = 6.9

const media = Math.round((notas1 + notas2 + notas3 ) / 3)
console.log(media.toFixed(2))

const mediaAprovacao = media >= 7
console.log(mediaAprovacao)


// Mostar se ele foi aprovado ou nao

console.log(`A fiquencia do aluno foi ${frequencia.toFixed(2)}% e sua nota foi ${media.toFixed(2)} `)

if (frequencia >= (80/100) && (media >= 7)) {
	console.log("APROVADO")
} else 
	console.log("REPROVADO")


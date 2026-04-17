const nota = 7
const BomComportamento = true

if (nota >= 7 && BomComportamento === true)
	console.log('Parabens')


if (nota < 7 || BomComportamento === false)
	console.log('Melhores na próxima')

const dignoDeParabens = nota >= 7 && BomComportamento

if (dignoDeParabens)
	console.log('Parabens')

if (!dignoDeParabens)
	console.log('Melhor na proxima')

console.log('FIM')
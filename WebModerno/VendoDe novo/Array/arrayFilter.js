const notas = [5.8, 8.1, 9.2, 4.5, 7.0]

// O filter percorre o array e só "deixa passar" quem retorna true
const aprovados = notas.filter(function(nota) {
    return nota >= 7 // Se a nota for maior ou igual a 7, retorna true [cite: 128]
})

console.log(aprovados) // Resultado: [8.1, 9.2, 7.0]

// 

const precos = [100, 250, 500, 1000]

const pAltos = precos.filter(function (alto) {
	return alto > 400
})

console.log(pAltos)
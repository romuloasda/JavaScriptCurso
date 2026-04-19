// DESAFIO IF ELSE

let velocidade = 80

if (velocidade > 80) {
	console.log("Multado! Você excedeu o limite.")
} else
	console.log('Dirija com cuidado')

let nota = 4

if (nota >= 9 || nota === 10) {
	console.log('Quadro de HORRA ')
} else if (nota >= 7) {
	console.log('APROVADO')
} else if (nota >= 5) {
	console.log('Recuperação')
} else if (nota < 5) {
	console.log('Reprovado')
}

num = 6

if ((num % 2) === 0) {
	console.log('O numero é par')
} else
	console.log('O numero é IMPAR')

// ------------------------------------------

// Desafio switch

let opcao = 0

switch (opcao) {
	case 1:
		console.log("Saldo Disponível")
		break
	case 2:
		console.log('Extrato da conta')
		break
	case 3:
		console.log('Falar com atendente')
		break
	default:
		console.log("Opção Inválida")
}


let cor = 'fsdfsd'

switch (cor) {
	case 'red':
		cor = 'Vermelho'
		console.log('RED significa VERMELHO')
		break
	case 'blue':
		cor = 'Azul'
		console.log('BLUE significa AZUL')
		break
	case 'green':
		cor = 'Verde'
		console.log('GREEN significa VERDE')
		break
	default:
		console.log('Cor INVALIDA')
}

// --------------------------------------------------------------

//  Desafio while

let contador = 10

while (contador >= 5) {
	console.log(contador)
	contador--
}

console.log('FOGO')

const nomes = ['Ana', 'Bia', 'Caio', 'Duda']

nomes.forEach(function (nome, indice, array) {
	console.log(indice, nome)
})

let acumulador = 0

for (let i = 0; i <= 100; i++) {
	acumulador += i
}

console.log(acumulador)

let acimaDeCEm = 0
const vendas = [120, 80, 200, 50, 300]

for (e of vendas) {
	if (e > 100) {
		console.log(`Venda R$ ${e}: ALTO DESEMPENHO`)
		acimaDeCEm += e
	}

}

const valor = vendas.reduce(function (acumulador, atual) {
	return acumulador + atual
}, 0)

console.log(`O valor total das vendas foram ${valor} e o total acima de cem foi ${acimaDeCEm}`)

const produtos = [
	{ nome: 'Teclado', qtd: 15 },
	{ nome: 'Mouse', qtd: 5 },
	{ nome: 'Monitor', qtd: 2 }
]

// produtos.forEach(produto => {
// 	console.log(produto.nome, produto.qtd)
// })

for (percorrer of produtos) {
	console.log(percorrer)
	if (percorrer.qtd < 10) {
		console.log(` O produto ${percorrer.nome} esta com um estoque ${percorrer.qtd} baixo`)
	}
}

const novaLista = produtos.filter(function (proCritico) {
	return proCritico.qtd <= 10
})

console.log(novaLista)

const notas = [5.5, 8.0, 4.0, 7.5, 9.5]

const notasNovas = notas.map(s1 => Math.min(s1 + 1, 10))

console.log(notasNovas)

notasNovas.forEach(function (notas, indice) {
	if (notas >= 7) {
		console.log(`${indice}. Nota: ${notas} APROVADO`)
	} else
		console.log(`${indice}. Nota: ${notas} REPROVADO`)
})

const usuarios = [
	{ nome: 'Ana', idade: 17 },
	{ nome: 'Beto', idade: 20 },
	{ nome: 'Caio', idade: 25 }
]

const apenas18 = usuarios.filter(function (maior) {
	return maior.idade >= 18
})

console.log(apenas18)

const fraseVIP = apenas18.reduce((acumulador, usuario, indice) => {
	return acumulador + (indice === 0 ? "" : ", ") + usuario.nome
}, "Os convidados vips são ")

console.log(fraseVIP)

const carrinho2 = [25.50, 10.00, 150.00, 5.00, 80.00]

let ie = 0
let oc = 0

for (ie of carrinho2) {
	if (ie > 100) {
		ie = ie - (ie * 1 / 5)
		oc += ie
	}
	console.log(`PREÇO ${ie}`)
}

console.log(oc)

const totalComDesconto = carrinho2
	.map(preco => preco > 100 ? preco * 0.8 : preco) // Aplica 20% se > 100
	.reduce((acc, atual) => acc + atual, 0);         // Soma tudo

console.log(`Total real: R$ ${totalComDesconto}`)

const lista2 = ['Banana', 'Maçã', 'Cachorro', 'Pera', 'Uva']

const posicao = lista2.indexOf("Cachorro")

// lista.splice(índice, quantosRemover, oQueAdicionar).

if (posicao !== -1) {
	lista2.splice(posicao, 1, 'Laranja'); // Remove o cachorro e coloca Laranja
}
lista2.sort(); // Coloca em ordem alfabética
console.log(lista2);
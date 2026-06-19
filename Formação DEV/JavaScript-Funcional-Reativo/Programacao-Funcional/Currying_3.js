function texto(min, max, erro, texto) {
	return function (max) {
		return function (erro) {
			return function (texto) {
				// Lazy Evaluation
				const tamanho = (texto || '').trim().length


				if (tamanho < min || tamanho > max) {
					throw erro
				}
			}

		}
	}
}

function aplicarValidacao(fn) {
	return function (valor) {
		//  Lazy Evaluation
		try {
			fn(valor)
		} catch (e) {
			return { error: e }
		}
	}
}

const forcarTamanhoPadrao = texto(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome Invalido!')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
console.log(validarNomeProduto(p1.nome))
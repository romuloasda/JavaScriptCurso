// wrapper

// Functiors são objetos que implementam a função Map
// Que tambem é um wrapper de um valor

const nums = [1, 2, 3, 4, 5, 6]

const novos = nums
	.map(el => el + 10)
	.map()

function tipoSeguro(valor) {
	return {
		valor,
		map(fn) {
			return tipoSeguro
		}
	}
}
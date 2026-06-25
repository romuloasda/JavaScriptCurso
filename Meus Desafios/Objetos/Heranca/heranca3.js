class Validador {
	static EmailValidador(email) {
		if (email.includes('@')) {
			return true
		} else {
			return false
		}
	}

	static formatarPreco(valor) {
		return `R$ ${valor.toFixed(2)}`
	}
}

const email = Validador.EmailValidador('testegmail.com')
console.log(email)

const valor = Validador.formatarPreco(150)
console.log(valor)
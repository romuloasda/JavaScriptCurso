class Data {
	#dia = 1
	#mes = 1
	#ano = 1970
	// atribubuto privado começa com #

	//Getters/ Setter

	obterDia() {
		return this.#dia
	}

	alterarDia(novoDia) {
		if (novoDia >= 1 && novoDia <= 31) {
			this.#dia = novoDia
		}
	}

	exibir() {
		return `${this.#dia}/${this.#mes}/${this.#ano}`
	}
}

const d1 = new Data()

d1.alterarDia(1)
console.log(d1.exibir(), d1)
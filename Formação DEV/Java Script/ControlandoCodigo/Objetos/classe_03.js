class Data {
	#dia = 1
	#mes = 1
	#ano = 1970
	// atribubuto privado começa com #

	//Getters/ Setter

	get dia() {
		return this.#dia
	}

	set dia(novoDia) {
		if (novoDia >= 1 && novoDia <= 31) {
			this.#dia = novoDia
		}
	}

	exibir() {
		return `${this.#dia}/${this.#mes}/${this.#ano}`
	}
}

const d1 = new Data()

d1.dia = 12
console.log(d1.exibir(), d1)
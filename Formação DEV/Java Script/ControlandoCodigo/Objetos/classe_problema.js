class Data {
	constructor(dia, mes, ano) {
		this.dia = dia
		this.mes = mes
		this.ano = ano
	}

	exibir() {
		return `${this.dia}/${this.mes}/${this.ano}`
	}
}

const d1 = new Data(12, 10, 2036)
console.log(d1.exibir())
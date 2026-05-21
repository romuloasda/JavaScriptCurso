function Data(dia, mes, ano) {
	this.dia = dia
	this.mes = mes
	this.ano = ano
	//  metodo de instacia
	this.exibir = function () {
		return `${this.dia}/${this.mes}/${this.ano}`
	}
}

const d1 = new Data(1, 1, 2024)
const d2 = new Data(2, 2, 2025)

console.log(typeof d1, d1)
console.log(typeof d2, d2)

console.log(d1.exibir())


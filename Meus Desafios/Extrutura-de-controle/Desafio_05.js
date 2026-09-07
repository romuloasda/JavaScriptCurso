const estoque = [
	{ item: "Teclado Mecânico", setor: "Periféricos", quantidade: 14, minimo: 10 },
	{ item: "Mouse Sem Fio", setor: "Periféricos", quantidade: 3, minimo: 5 },
	{ item: "Cabo HDMI 2.0", setor: "Cabos", quantidade: 0, minimo: 8 },
	{ item: "Monitor 24pol", setor: "Monitores", quantidade: 12, minimo: 4 },
	{ item: "Hub USB-C", setor: "Acessórios", quantidade: 2, minimo: 6 }
];

let qtd = 0

const soPerificos = estoque
	.filter(({ quantidade, minimo }) => quantidade <= minimo)
	.map((a) => {
		let deficit = a.minimo - a.quantidade
		qtd += deficit
		return `ALERTA: ${a.item} precisa de reposição urgente de ${deficit} unidades.`
	})
console.log(soPerificos, "\nQuantidade de itens que precisa ser comprado: ", qtd)

const emailsBrutos = [
	"   Lucas@EMPRESA.com  ",
	"MARIANA@empresa.com",
	"lucas@empresa.com",
	"  rodrigo@empresa.com ",
	"mariana@empresa.com   ",
	"beatriz@empresa.com"
];

const limpos = emailsBrutos.map(a => a.toLocaleLowerCase().trim()).toSorted()
console.log(limpos)

const equipeTI = [
	{ id: 1, nome: "Carlos", nivel: "pleno", salarioBase: 5000, faltas: 0 },
	{ id: 2, nome: "Juliana", nivel: "senior", salarioBase: 9000, faltas: 1 },
	{ id: 3, nome: "Pedro", nivel: "junior", salarioBase: 3000, faltas: 3 }
];


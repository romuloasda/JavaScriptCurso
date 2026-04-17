vtr = { prefixo: "105", km: 50000, motorista: "Arantes" }

console.log(Object.values(vtr))
console.log(Object.keys(vtr))
console.log(Object.entries(vtr))

const morador = {nome: 'Romulo'}

Object.defineProperty(morador, 'CPF', {
	enumerable: true,
	writable: false,
	value: '108.654.454-87'
})

console.log(Object.keys(morador))
console.log(Object.values(morador))
console.log(Object.entries(morador))

morador.CPF = '1212121221'

console.log(Object.entries(morador))

const kitBasico = { algema: 1, lanterna: 1 }

const kitEspecial = { colete: 1, algema: 2 }

const kitFinal = Object.assign(kitBasico, kitEspecial)

console.log(kitFinal)

viatura = { prefixo: "105", modelo: "Corolla" }

Object.defineProperty(viatura, 'idInterno', {
	enumerable: false,
	writable: false,
	value: 999
})

console.log(Object.keys(viatura))
console.log(viatura.idInterno)

const guarda = { nome: "Arantes", matricula: "GCM-88", posto: "Centro" }

Object.entries(guarda).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`)
})

const ocorrenciaBase = { id: 1, tipo: "Apoio" }
const dadosLocal = { bairro: "Loteamento", cidade: "Paulista" }
const dadosFinalizacao = { status: "Concluído", tipo: "Apoio Social" }

const boletimCompleto = Object.assign(ocorrenciaBase, dadosLocal, dadosFinalizacao)

console.log(boletimCompleto)

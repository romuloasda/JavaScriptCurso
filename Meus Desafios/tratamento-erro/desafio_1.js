function dividir(a, b) {
	if (b === 0) {
		throw new Error("Divisão por zero não é permitida.");
	}
	return a / b;
}

try {
	const resultado = dividir(10, 0);
	console.log("Resultado:", resultado);
} catch (erro) {
	console.log("Falha capturada:", erro.message);
} finally {
	console.log("Fim do processo de divisão.");
}

function processarTransferencia(saldoAtual, valorTransferencia) {
	if (typeof saldoAtual !== 'number' || typeof valorTransferencia !== 'number') {
		throw new Error("Valores devem ser numéricos")
	} else if (valorTransferencia <= 0) {
		throw new Error("O valor da transferência deve ser maior que zero")
	} else if (valorTransferencia > saldoAtual) {
		throw new Error("Saldo insuficiente para a transferência")
	}

	return saldoAtual - valorTransferencia
}


try {
	const transacao = processarTransferencia(500, 100)
	console.log("Operação realizada com sucesso. ", transacao)
} catch (erro) {
	console.log('Falha na captura:', erro.message)
} finally {
	console.log('Fim da transacao')
}

const registros = [
	{ id: 101, status: "pago", valor: 150, cliente: { nome: "Lucas", vip: true } },
	{ id: 102, status: "pendente", valor: 80, cliente: { nome: "Marina", vip: false } },
	{ id: 103, status: "pago", valor: 400, cliente: { nome: "Jorge", vip: false } },
	{ id: 104, status: "cancelado", valor: 250, cliente: { nome: "Ana", vip: true } },
	{ id: 105, status: "pago", valor: 60, cliente: { nome: "Bia", vip: true } }
];

const pedidos_pagos = registros
	.filter(({ status }) => status === 'pago')
	.map(({ valor, cliente, ...resto }) => {
		let taxa = cliente.vip ? valor * 0.02 : valor * 0.08
		return {
			...resto,
			cliente,
			valor,
			valorTaxa: taxa,
			valorTotal: valor + taxa
		}
	})

const somaValorTotalTaxa = pedidos_pagos.reduce((ac, a) => {
	return a.valorTaxa + ac
}, 0)
const listaComNomesPago = pedidos_pagos.map(a => a.cliente.nome)


console.table(pedidos_pagos)
console.log(somaValorTotalTaxa.toFixed(2))
console.log(listaComNomesPago)

function processarLote(pacotes, limitePesoMaximo) {
	// 1. Validações das entradas principais
	if (!Array.isArray(pacotes) || pacotes.length === 0) {
		throw new Error("Lote inválido ou vazio");
	}
	if (typeof limitePesoMaximo !== "number" || limitePesoMaximo <= 0) {
		throw new Error("Limite de peso inválido");
	}

	// 2. Validação individual de cada pacote
	for (const pesoItem of pacotes) {
		if (typeof pesoItem !== "number" || pesoItem <= 0) {
			throw new Error("Pacote com peso irregular detectado");
		}
	}

	// 3. Cálculo do peso consolidado
	const pesoTotal = pacotes.reduce((acc, p) => acc + p, 0);

	// 4. Verificação de sobrecarga
	if (pesoTotal > limitePesoMaximo) {
		throw new Error("Sobrecarga: peso total excede o limite permitido");
	}

	return `Lote aprovado! Total de pacotes: ${pacotes.length} | Peso total: ${pesoTotal}kg`;
}

// Execução com cobertura de testes
const cenarios = [
	{ lotes: [10.0, 30.0, 20.0, 60.0], limite: 100 }, // Erro: Sobrecarga (120kg > 100kg)
	{ lotes: [10.0, 20.0, 30.0], limite: 100 },        // Sucesso (60kg <= 100kg)
	{ lotes: [10.0, -5.0, 20.0], limite: 100 },        // Erro: Peso irregular
	{ lotes: [], limite: 100 }                          // Erro: Lote vazio
];

for (const { lotes, limite } of cenarios) {
	try {
		const resultado = processarLote(lotes, limite);
		console.log("SUCESSO:", resultado);
	} catch (erro) {
		console.log("FALHA CAPTURADA:", erro.message);
	}
}
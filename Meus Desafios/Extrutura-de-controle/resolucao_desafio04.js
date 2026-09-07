const logsRequisicoes = [
	{ rota: "/api/produtos", status: 200, tempoMs: 120 },
	{ rota: "/api/usuarios", status: 500, tempoMs: 450 },
	{ rota: "/api/login", status: 401, tempoMs: 80 },
	{ rota: "/api/produtos", status: 200, tempoMs: 140 },
	{ rota: "/api/usuarios", status: 200, tempoMs: 200 },
	{ rota: "/api/produtos", status: 500, tempoMs: 600 },
	{ rota: "/api/pedidos", status: 404, tempoMs: 50 }
];

function analisarAuditoria(logs, limiteTempo) {
	// 1. Validação de estrutura e parâmetros
	if (!Array.isArray(logs) || logs.length === 0 || typeof limiteTempo !== "number" || limiteTempo <= 0) {
		throw new Error("Entrada de logs ou limite de tempo inválido");
	}

	// 2. Validação de formato dos itens
	for (const { rota, status, tempoMs } of logs) {
		if (!rota || typeof status !== "number" || typeof tempoMs !== "number") { // A vaidação dica mais simples pe que pergunto se é diferete do que eu quero
			throw new Error("Registro de log com formato irregular detectado");
		}
	}

	// 3. Contagem por status HTTP
	const contagemPorStatus = { sucesso: 0, cliente: 0, servidor: 0 };

	for (const { status } of logs) {
		if (status >= 200 && status <= 299) {
			contagemPorStatus.sucesso++;
		} else if (status >= 400 && status <= 499) {
			contagemPorStatus.cliente++;
		} else if (status >= 500 && status <= 599) {
			contagemPorStatus.servidor++;
		}
	}

	// 4. Extração das rotas mais lentas
	const rotasMaisLentas = logs
		.filter(({ tempoMs }) => tempoMs > limiteTempo)
		.map(({ rota }) => rota);

	// 5. Retorno do objeto consolidado
	return {
		totalRequisicoes: logs.length,
		rotasMaisLentas,
		contagemPorStatus
	};
}

try {
	const relatorio = analisarAuditoria(logsRequisicoes, 150);
	console.log("Relatório Consolidado:");
	console.dir(relatorio, { depth: null });
} catch (erro) {
	console.log("Falha na auditoria:", erro.message);
} finally {
	console.log("Processamento de auditoria concluído.");
}
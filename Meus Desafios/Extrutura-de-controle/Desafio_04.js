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
	if ((!Array.isArray(logs) || logs.length <= 0) || limiteTempo <= 0) {
		throw new Error('Log Ivalido')
	}

	for (const v of logs) {
		if (v.tempoMs === null || v.status === null || v.rota === null) {
			throw new Error('Logs Nulo')
		} else if (v.rota === undefined || v.status === undefined || v.tempoMs === undefined) {
			throw new Error('Logs Undefined')
		}
	}

	const contagemPorStatus = {}

	for (const { status } of logs) {
		if (status >= 200 && status <= 299) {
			contagemPorStatus['sucesso'] = (contagemPorStatus['sucesso'] || 0) + 1
		} else if (status >= 400 && status <= 499) {
			contagemPorStatus['cliente'] = (contagemPorStatus['cliente'] || 0) + 1
		} else if (status >= 500 && status <= 599) {
			contagemPorStatus['servidor'] = (contagemPorStatus['servidor'] || 0) + 1
		}

	}
	console.log('CONTAGEM POR STATUS')
	console.table(contagemPorStatus)

	const rotasMaisLentas = logs.filter(a => a.tempoMs > limiteTempo)
	console.log('ROTAS MAIS LENTAS')
	console.table(rotasMaisLentas)

	console.log('Total de REQUISIÇÕES: ', contagemPorStatus.sucesso)

}


try {
	const logsAtual = analisarAuditoria(logsRequisicoes, 150)
	console.log(logsAtual)
} catch (erro) {
	console.log('Falha: ', erro.message)
} finally {
	console.log('FIM')
}




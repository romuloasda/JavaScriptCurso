// ex 01

module.exports = function log(mensagem, nivel) {
	if (nivel === 'erro') {
		return `ERRO CRÍTICO ${mensagem}`
	} else if (nivel === 'info') {
		return `INFORMAÇÃO ${mensagem}`
	}
}


const usuarios = ["  _MestreDev  ", "  _romulo  ", "  _Pan  ", "  _Geralt  "];

for (let usuario of usuarios) {
	const usuarioLimpo = usuario.trim().replace('_', '').toUpperCase()
	console.log(usuarioLimpo)
}

const chat = ["Acesse o site http://google.com", "Bom dia grupo", "Link malicioso aqui: http://virus.com", "Estudando JS"];

for (let mensagem of chat) {
	if (mensagem.includes('http://')) {
		console.log(mensagem.replace('http:', 'LINK-BLOQUEADO'))
	} else {
		console.log(mensagem)
	}
}

const arquivos = ["foto.png", "relatorio.pdf", "script.js", "musica.mp3"];

const formatoDeArquivo = []

for (let formato of arquivos) {
	const fa = formato.slice(formato.indexOf('.') + 1)
	formatoDeArquivo.push(fa)
}
console.log(formatoDeArquivo)

const cpfsBrutos = ["111.222.333-44", "55566677788", "999.888.777-66"];

for (let cpf of cpfsBrutos) {
	let cpfLimpo = cpf.replaceAll('.', "").replaceAll('-', '')
	console.log(cpfLimpo)
}

const logServidor = "ERROR:Erro no banco;INFO:Usuario logado;ERROR:Timeout na API;SUCCESS:Dados salvos;ERROR:Falha de conexao";

let logArray = logServidor.split(';')
console.log(logArray)
let cont = 0

for (log of logArray) {
	if (log.includes('ERROR')) {
		cont++
	}
}

console.log(`O total de erros foi: ${cont}`)


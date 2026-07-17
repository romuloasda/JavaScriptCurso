const frases = ["programar é arte", "js é bom", "fala mestre", "bancada limpa"];


for (let i = 0; i < frases.length; i++) {
	if (i % 2 === 0) {
		console.log(frases[i].toUpperCase())
	} else {
		console.log(frases[i])
	}
}

const comentarios = ["Eu amo programar", "Esse sistema tem um bug!", "Código limpo", "Achei outro bug aqui"];

for (comentario of comentarios) {
	if (comentario.includes('bug')) {
		console.log(`${comentario.replace('bug', "característica especial")}`)
	} else {
		console.log(comentario)
	}
}

const codigos = ["TECLADO-2026", "MOUSE-2025", "MONITOR-2026"];

for (codigo of codigos) {
	let traco = codigo.indexOf('-')
	console.log(codigo.slice(0, traco))
}

const postagens = ["javascript,backend,poo", "estudos,foco", "html,css,web"];

for (postagem of postagens) {
	const newPostagem = postagem.split(',')
	if (newPostagem.length > 2) {
		console.log(`Postagem VIP: ${newPostagem}`)
	}
}

const emailsIncompletos = ["mestre@gmail.com", "romulo.dev.com", "pan@outlook.com", "js.org"];

for (emailIncompleto of emailsIncompletos) {
	if (emailIncompleto.includes('@')) {
		let email = emailIncompleto.toLowerCase()
		console.log(`E-mail Válido: ${email}`)
	} else {
		email = emailIncompleto.indexOf('.')
		console.log(`Erro no índice ${email}: O e-mail |${emailIncompleto}| está incorreto!`)
	}
}
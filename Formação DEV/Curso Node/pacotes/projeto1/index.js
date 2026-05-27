import chalk from "chalk";
import server from 'server'
import { DateTime } from 'luxon'

const { get } = server.router


function imprimeHora(cidade, hora) {
	console.log(chalk.bgBlue(`Em ${cidade} são ${hora}`))
}

server({ port: 8080 }, [
	get('/', (ctx) => "Olá Mundo"),
	get('/roma', () => {
		const h = DateTime.local({ zone: 'Europe/Rome' }).toFormat('HH:mm:ss')
		imprimeHora('roma', h)
		return h
	})
])

// const azul = (texto) => console.log(chalk.blue(texto))
// const aviso = (texto) => console.log(chalk.bgYellow.bold(texto))
// const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto))

// azul('Sou texto')
// aviso('Preciso te avisar de uma coisa..')
// erro('Abortar Missãon')
import chalk from "chalk";

const azul = (texto) => console.log(chalk.blue(texto))
const aviso = (texto) => console.log(chalk.bgYellow.bold(texto))
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto))

azul('Sou texto')
aviso('Preciso te avisar de uma coisa..')
erro('Abortar Missãon')
import pensador from "pensador-scrap"
import fs from "fs"

const { error, success } = await pensador.search({
	query: "Platao",
	limit: 12
})

let pensamentoPraSalvar;

// console.log(error)
// console.log(success)
try {
	const pensamentos = success.thought;
	const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
	const pensamentosSelecionado = pensamentos[indiceAleatorio]
	// console.log(pensamentosSelecionado.content)

	let pensamentoPraSalvar = `${pensamentosSelecionado.author} disse: -> ${pensamentosSelecionado.content}`
	console.log(pensamentoPraSalvar)
} catch (e) {
	let pensamentoPraSalvar = `${pensamentosSelecionado.author} não tem pensamentos`
} finally {
	// fs.writeFileSync("frases.txt", pensamentoPraSalvar, "utf-8")
	fs.appendFileSync("frases2.txt", pensamentoPraSalvar, "utf-8")
	const texto = fs.readFileSync('frases2.txt', "utf-8")
	console.log(texto)
}
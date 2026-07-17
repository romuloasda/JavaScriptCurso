let linguagem = 'JavaScript'

console.log(linguagem[0])

let fraseDoDia = "Programar é arte"
console.log(fraseDoDia.length)

let emailSujo = "Rômulo@GMAIL.COM"
let emailLimpo = emailSujo.toLowerCase()
console.log(emailLimpo)


let codigoCupom = "PROMO2026"
let ano = codigoCupom.slice(5)
console.log(ano)


let dataIncorreta = "12-07-2026"
let dataCorreta = dataIncorreta.replaceAll('-', '/')
console.log(dataCorreta)

let comentarioUsuario = "Esse site é muito bom, não tem nenhum bug!"
console.log(comentarioUsuario.includes('bug'))

let inputEmail = "mestre.dev.com"
console.log(inputEmail.indexOf('@'))

let documento = "relatorio_final.pdf"
console.log(!documento.indexOf('.pdf'))

if (documento.indexOf(".pdf") != -1) {
	console.log('"Arquivo PDF válido!"')
} else {
	console.log("Formato incorreto! Envie um PDF.")
}

let listaTags = "node,express,react,mongo"
let arrayTags = listaTags.split(",")
console.log(arrayTags)

let loginUsuario = "  MestreDev@Gmail.Com  "
let loginLimpo = loginUsuario.trim().toLowerCase()
console.log(loginLimpo)
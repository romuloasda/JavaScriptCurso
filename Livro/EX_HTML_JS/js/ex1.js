// Cria referencia ao form e ao elemento h3(Onde sera exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3	")

//cria ouvinte dentro do envento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
	const nome = frm.inNome.value
	resp.innerText = `Olá ${nome}`
	e.preventDefault()
})
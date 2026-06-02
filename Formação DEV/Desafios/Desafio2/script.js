
const paraConverter = document.querySelector('#para-converter')
const resp1 = document.querySelector("#resposta")
const botao = document.querySelector("#botao")
const destaBase = document.querySelector('#inDecimal1')
const paraBase = document.querySelector('#inDecimal2')




botao.addEventListener('click', () => {

	let numero = paraConverter.value
	let baseOrigem = +destaBase.value
	let baseFinal = +paraBase.value
	let resultadoFinal;

	// if (numero === "") {
	// 	resp1.innerText = "Erro: Digite um número para converter!";
	// 	return; // O 'return' faz a função parar aqui e não executa o resto do código
	// }

	// // --- 2. TRATAMENTO DE ERRO: Caracteres inválidos ---
	// let valido = false;

	// if (baseOrigem === 2) {
	// 	// Verifica se só tem números 0 e 1
	// 	valido = /^[01]+$/.test(numero);
	// } else if (baseOrigem === 10) {
	// 	// Verifica se só tem números de 0 a 9
	// 	valido = /^[0-9]+$/.test(numero);
	// } else if (baseOrigem === 16) {
	// 	// Verifica se só tem números de 0-9 e letras de A-F (maiúsculas ou minúsculas)
	// 	valido = /^[0-9A-Fa-f]+$/.test(numero);
	// }

	if (baseOrigem === baseFinal) {
		resultadoFinal = `As bases são iguais`;
	} else {
		// Transforma o texto de qualquer base (2, 10 ou 16) para o número base do JS
		let valorDecimal = parseInt(numero, baseOrigem);

		// Transforma o número para a base de destino
		resultadoFinal = valorDecimal.toString(baseFinal);
	}

	if (isNaN(numero)) {
		Swal.fire({
			title: "❌ Erro interno ao processar o número. Verifique os dados.",

		});

	}







	resp1.innerText = resultadoFinal.toUpperCase()

})

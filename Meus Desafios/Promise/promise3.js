const pegarNumero = new Promise(resolve => resolve(5));

pegarNumero
	.then(numero => {
		return numero * 2; // Retorna 10
	})
	.then(resultadoDobrado => {
		console.log(resultadoDobrado); // Imprime 10!
	});


const texto = (js) => {
	return new Promise((resolve, reject) => {
		resolve(js)
		reject('Texto Invalido')
	})
}

texto('JavaScript')
	.then(texto => texto.toUpperCase())
	.then(texto => console.log(texto + "!!!"))
